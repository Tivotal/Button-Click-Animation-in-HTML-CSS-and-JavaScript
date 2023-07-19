/* Created by Tivotal */

let button = document.querySelector(".button");

//click event listener
button.addEventListener("click", (e) => {
  //preventing default behaviour
  e.preventDefault();

  //adding animate class to button
  button.classList.add("animate");

  setTimeout(() => {
    //removing animate class after 600ms
    button.classList.remove("animate");
  }, 600);
});
