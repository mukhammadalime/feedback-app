const filterByCategory = (sortedBy, loadedFeedbacks, filteredBy) => {
  let filteredData = loadedFeedbacks.filter((feedback) => {
    return filteredBy === "all" ? feedback : feedback.category === filteredBy;
  });

  switch (sortedBy) {
    case "Least Upvotes":
      filteredData = filteredData.sort((a, b) => a.upvotes - b.upvotes);
      break;
    case "Most Comments":
      filteredData = filteredData.sort(
        (a, b) => b.comments?.length - a.comments?.length
      );
      break;
    case "Least Comments":
      filteredData = filteredData.sort(
        (a, b) => a.comments?.length - b.comments?.length
      );
      break;
    default:
      filteredData = filteredData.sort((a, b) => b.upvotes - a.upvotes);
      break;
  }
  return filteredData;
};

export default filterByCategory;
