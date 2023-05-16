const url = "https://jsonplaceholder.typicode.com/posts";

const loadinElement = document.querySelector("#loading");
const postContainer = document.querySelector("#posts-container");

//Get all posts

async function getAllPost() {
  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data);

  loadinElement.classList.add("hide");
}

getAllPost();
