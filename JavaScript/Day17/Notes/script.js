// Api and json
// async function fetchData() {
//     const data = await fetch("https://dummyjson.com/comments")
//     const textData = await data.text()
//     console.log(textData);
//     const finalData = JSON.parse(textData)
//     console.log(finalData);
//     console.log(finalData.comments);
//     console.log(finalData.comments[1].body);
//     console.log(finalData.comments[4].body);

//     let h1 = document.querySelector("h1")
//     h1.innerText = finalData.comments[1].body
// }

// fetchData()

// Fetching Posts

async function fetchPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  let container = document.createElement("div");
  container.classList.add("container");

  let title = document.createElement("h2");
  title.innerText = data.posts[0].title;

  let likeCount = document.createElement("button");
  likeCount.classList.add("like-btn");
  likeCount.innerText = `Likes: ${data.posts[0].reactions.likes}`;

  let dislikeCount = document.createElement("button");
  dislikeCount.classList.add("like-btn");
  dislikeCount.innerText = `Dislikes: ${data.posts[0].reactions.dislikes}`;

   let views = document.createElement("button");
   views.innerText = `Views: ${data.posts[0].views}`

  console.log(data.posts[0]);

  let heading = document.querySelector("#main-heading");
  heading.insertAdjacentElement("afterend", container);

  container.insertAdjacentElement("beforeend", title);

  title.insertAdjacentElement("afterend", dislikeCount);
  title.insertAdjacentElement("afterend", likeCount);
}
fetchPosts();
