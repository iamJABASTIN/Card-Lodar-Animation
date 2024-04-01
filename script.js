const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile = document.getElementById("profile");
const nme = document.getElementById("name");
const date = document.getElementById("date");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHtml = "<img src='./images/The Iron Man.jpg' alt='Iron Man'>";

  title.innerText =  "I am Iron Man";
  excerpt.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam ";
  profile.innerHTML = '<img src="./images/The Batman.jpg" alt="profile picture" width="40px" height="40px"/> ';
  nme.innerText = "Jabastin";
  date.innerText = "Feb 30, 2027";

  animated_bg.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_text.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
