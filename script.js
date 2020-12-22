let profileIcon = document.getElementById("one");
let musicIcon = document.getElementById("two");
let message = document.getElementById("three");
let header = document.getElementById("main");
let navBoard = document.querySelector(".navigation__board");
let span = document.querySelector(".textBoard-span");

//Functions for Icons*/

profileIcon.addEventListener("click", function () {
  header.textContent = "I build beautiful and simple interfaces.";
  navBoard.classList.remove("blue");
  navBoard.classList.remove("purple");
  navBoard.classList.add("white");
  span.classList.remove("blue");
  span.classList.remove("purple");
  span.classList.add("white");
});

musicIcon.addEventListener("click", function () {
  header.textContent = "I vibe to cool songs especially nasty c's";
  navBoard.classList.remove("purple");
  navBoard.classList.remove("white");
  navBoard.classList.toggle("blue");
  span.classList.remove("white");
  span.classList.remove("purple");
  span.classList.add("blue");
});

message.addEventListener("click", function () {
  header.innerHTML =
    "You can message me always at  <a href = 'mailto:okeybenson4@gmail.com'><i class='fas fa-envelope'></i></a>";
  navBoard.classList.remove("white");
  navBoard.classList.remove("blue");
  navBoard.classList.toggle("purple");
  span.classList.remove("blue");
  span.classList.remove("white");
  span.classList.add("purple");
});
