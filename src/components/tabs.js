// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

import axios from "axios";

const Tabs = (topics) => {
  //? ------------------ Topics Container
  const topicsContainer = document.createElement("div");
  topicsContainer.classList.add("topics");

  //? ------------------ Language Div Creator
  topics.forEach((e) => {
    let langDiv = document.createElement("div");
    langDiv.classList.add("tab");
    langDiv.textContent = e;
    topicsContainer.appendChild(langDiv);
  });
  return topicsContainer;
};
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
    // .get(`#`)
    .get(`https://lambda-times-api.herokuapp.com/topics`)
    .then((res) => {
      const axiosInfo = res.data.topics;
      // const axiosInfo = [`javascript`, `bootstrap`, `technology`];
      const selectTab = document.querySelector(selector);
      selectTab.appendChild(Tabs(axiosInfo));
    })
    .catch((e) => {
      console.log(`something went wrong: ${e}`);
    });
};
export { Tabs, tabsAppender };
