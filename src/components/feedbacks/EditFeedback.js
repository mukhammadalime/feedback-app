import React from "react";

const EditFeedback = () => {
  return (
    <div class="container-new-feed">
      <div class="btn-go-back">
        <img src="assets/shared/icon-arrow-left.svg" alt="" />
        Go back
      </div>

      <div class="new-feed">
        <img
          src="assets/shared/icon-new-feedback.svg"
          alt=""
          class="new-feed__img"
        />
        <h4 class="primary-text">Editing 'Add a dark theme option'</h4>
        <div class="new-feed__title">
          <h5 class="primary-text-4">Feedback Title</h5>
          <p class="body-4">Add a short, descriptive headline</p>
          <input type="text" class="new-feed__title--input" />
        </div>

        <div class="sorting-input ">
          <h5 class="primary-text-4">Category</h5>
          <p class="body-4">Choose a category for your feedback</p>
          <div class="sorting-input--sort  edit-category-input ">
            <p class="sorting-input--sort--text ">Feature</p>
            <img
              src="assets/shared/icon-arrow-down.svg"
              alt=""
              class="sorting-input--sort--icon"
            />

            <div class="sort-box category-sort-box hidden">
              <div class="sort-box__item">
                Feature
                <img
                  src="assets/shared/icon-check.svg"
                  alt=""
                  class="sort-box__tick-icon"
                />
              </div>
              <div class="sort-box__item">UI</div>
              <div class="sort-box__item">UX</div>
              <div class="sort-box__item">Enhancement</div>
              <div class="sort-box__item">Bug</div>
            </div>
          </div>
        </div>

        <div class="sorting-input">
          <h5 class="primary-text-4">Update Status</h5>
          <p class="body-4">Change feedback status</p>
          <div id="planned-status-icon" class="sorting-input--sort">
            <p class="sorting-input--sort--text">Planned</p>
            <img
              src="assets/shared/icon-arrow-down.svg"
              alt=""
              class="sorting-input--sort--icon"
            />

            <div class="sort-box planned-status-box hidden">
              <div class="sort-box__item">Suggestion</div>
              <div class="sort-box__item">
                Planned
                <img
                  src="assets/shared/icon-check.svg"
                  alt=""
                  class="sort-box__tick-icon"
                />
              </div>
              <div class="sort-box__item">In-Progress</div>
              <div class="sort-box__item">Live</div>
            </div>
          </div>
        </div>

        <div class="new-feed__detail">
          <h5 class="primary-text-4">Feedback Detail</h5>
          <p class="body-4">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            class="new-feed__detail--input"
            name=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div class="btn-red edit-feed__delete-btn">Delete</div>
        <div class="new-feed__btns edit-feed__btns">
          <div class="btn-dark-blue">Cancel</div>
          <div class="btn-purple">Save Changes</div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
