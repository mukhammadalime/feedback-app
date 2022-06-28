import config from "../config.json";

///////////////////////////////////////////////////////////
export async function getAllFeedbacks() {
  const response = await fetch(`${config.FIREBASE}feedbacks.json`);
  const data = await response.json();

  if (data === null || !data) {
    throw new Error("Could not fetch feedbacks. Please try again later");
  }

  const transformedQuotes = [];
  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

///////////////////////////////////////////////////////////
export async function addFeedback(feedbackData) {
  const response = await fetch(`${config.FIREBASE}feedbacks.json`, {
    method: "POST",
    body: JSON.stringify(feedbackData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message
        ? data.message
        : "Could not add feedback. Please try again later"
    );
  }

  return null;
}

///////////////////////////////////////////////////////////
export async function editFeedback(feedbackData) {
  // 1. Find currently updating feedback
  const res = await fetch(
    `${config.FIREBASE}feedbacks/${feedbackData.id}.json`
  );

  const updatedFeedback = await res.json();

  // 2. If not found, throw an error
  if (!updatedFeedback) throw new Error("Could not find updating feedback");

  // 3. If found, update the feedback
  updatedFeedback.title = feedbackData.title;
  updatedFeedback.category = feedbackData.category;
  updatedFeedback.status = feedbackData.status;
  updatedFeedback.description = feedbackData.description;

  // 4. Send api call to update
  const response = await fetch(
    `${config.FIREBASE}feedbacks/${feedbackData.id}.json`,
    {
      method: "PUT",
      body: JSON.stringify(updatedFeedback),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not edit feedback");
  }
  return null;
}

///////////////////////////////////////////////////////////
export async function deleteFeedback(feedbackId) {
  const response = await fetch(
    `${config.FIREBASE}feedbacks/${feedbackId}.json`,
    {
      method: "DELETE",
    }
  );

  await response.json();

  if (!response.ok) {
    throw new Error("Could not delete the feedback");
  }

  return null;
}

///////////////////////////////////////////////////////////
export async function getFeedbackDetail(feedbackId) {
  const response = await fetch(
    `${config.FIREBASE}feedbacks/${feedbackId}.json`
  );

  const data = await response.json();

  if (!data || data === null) {
    throw new Error("Could not find feedback. Please try again later!");
  }

  const loadedFeedback = {
    id: feedbackId,
    ...data,
  };

  return loadedFeedback;
}

///////////////////////////////////////////////////////////
export async function addComment(commentData) {
  // 1. Find the feedback that is being commented
  const response = await fetch(
    `${config.FIREBASE}feedbacks/${commentData.feedbackId}.json`
  );

  const commentingFeedback = await response.json();

  // 2. If feedback is not found, send alert
  if (!commentingFeedback || commentingFeedback === null) {
    throw new Error("Could not find feedback");
  }

  // 3. Create a new comment
  const newComment = {
    id: commentingFeedback.comments
      ? commentingFeedback.comments.length + 1
      : 1,
    content: commentData.content,
    user: commentData.user,
  };

  // 4. Check if feedback has comments before. if so, push new comment. If not create a comment array with new comments in it
  if (commentingFeedback.comments) {
    commentingFeedback.comments.push(newComment);
  } else commentingFeedback.comments = [newComment];

  // 5. Send api call to update the feedback
  const res = await fetch(
    `${config.FIREBASE}feedbacks/${commentData.feedbackId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(commentingFeedback),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not create comment");
  }

  window.location.reload();
  return data;
}

///////////////////////////////////////////////////////////
export async function addReply(reply) {
  // 1. Find current feedback
  const res = await fetch(
    `${config.FIREBASE}feedbacks/${reply.feedbackId}.json`
  );

  const currentFeedback = await res.json();

  // 1. A) If feedback is not found, send error
  if (!currentFeedback || currentFeedback === null) {
    throw new Error("Could not find feedback that is being replied");
  }

  // 2. Find current comment that is being replied
  const currentCommentIndex = currentFeedback.comments.findIndex(
    (comment) => comment.id === reply.replyingCommentId
  );

  const currentComment = currentFeedback.comments[currentCommentIndex];

  // 3. Create a new reply
  const newReply = {
    id: currentComment.replies ? currentComment.replies.length + 1 : 1,
    content: reply.content,
    replyingTo: reply.replyingTo,
    user: reply.user,
  };

  // 4. If comment does not have a reply array, create one. Otherwise push new reply
  if (!currentComment.replies) currentComment.replies = [newReply];
  else currentComment.replies.push(newReply);

  // 5. Update current feedback comments
  currentFeedback.comments[currentCommentIndex] = currentComment;

  const response = await fetch(
    `${config.FIREBASE}feedbacks/${reply.feedbackId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(currentFeedback),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not create reply");
  }

  window.location.reload();
  return null;
}
