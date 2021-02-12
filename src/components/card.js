import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //* Elements ////////////////////////////
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const authImg = document.createElement("img");
  const authSpan = document.createElement("span");

  //* Classes ////////////////////////////
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  //* Content /////////////////////////////
  headlineDiv.textContent = article.headline;
  authImg.src = article.authorPhoto;
  authSpan.textContent = article.authorName;

  //? example of data:
  //? {"id":"2403c5a7-f610-417b-ad8a-ab18e841949e","headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUFF"}

  //* Appends ///////////////////////////
  cardDiv.append(headlineDiv, authorDiv);
  authorDiv.append(imgDiv, authSpan);
  imgDiv.append(authImg);

  // console.log(cardDiv);

  //* adding eventListener
  cardDiv.addEventListener("click", () => {
    console.log(article.headline);
  });
  return cardDiv;
};
// let articleTest = {
//   headline: `boogey woogey`,
//   authorPhoto: `https://picsum.photos/id/237/536/354`,
//   authorName: `Nadeem Khan - test`,
// };
// Card(articleTest);

const cardAppender = (data) => {
  const cardContainer = document.querySelector(".cards-container");
  const axiosInfo = axios
    // .get("#")
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      //* JavaScript article appending
      const jsInfo = res.data.articles.javascript;
      jsInfo.forEach((post) => {
        const newCard = Card(post);
        cardContainer.append(newCard);
      });
      //* bootstrap article appending
      const bootstrapInfo = res.data.articles.bootstrap;
      bootstrapInfo.forEach((post) => {
        const newCard = Card(post);
        cardContainer.append(newCard);
      });
      //* tech article appending
      const techInfo = res.data.articles.technology;
      techInfo.forEach((post) => {
        const newCard = Card(post);
        cardContainer.append(newCard);
      });
      //* jquery article appending
      const jqueryInfo = res.data.articles.jquery;
      jqueryInfo.forEach((post) => {
        const newCard = Card(post);
        cardContainer.append(newCard);
      });
      //* node article appending
      const nodeInfo = res.data.articles.node;
      nodeInfo.forEach((post) => {
        const newCard = Card(post);
        cardContainer.append(newCard);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return axiosInfo;
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // const domSelect = document.querySelector(selector);
  // let cardInfo = [
  //   {
  //     id: "2403c5a7-f610-417b-ad8a-ab18e841949e",
  //     headline:
  //     "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
  //     authorPhoto:
  //     "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",
  //     authorName: "SIR RUFF'N'STUFF",
  //   },
  // ];
  // for (let i = 0; i < cardInfo.length; i++) {
  //   document.querySelector(selector).append(Card(cardInfo[i]));
  // }
};

export { Card, cardAppender };
