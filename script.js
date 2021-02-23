"use strict";

const girlsEl = document.querySelector(".girls");
const colorBtn = document.querySelector(".colorBtn");

//Left button for changing girl
// colorBtn.addEventListener("click", function () {
//   console.log("you clicked");
// });
// colorBtn.addEventListener("click", changeGirl);

function changeGirl() {
  const girl = Math.trunc(Math.random() * 6) + 1;
  girlsEl.src = `girls${girl}.jpg`;
}

const boysEl = document.querySelector(".boys");
const rightBtn = document.querySelector(".rightBtn");

rightBtn.addEventListener("click", function () {
  console.log("you clicked");
});
rightBtn.addEventListener("click", changeBoy);

function changeBoy() {
  const boy = Math.trunc(Math.random() * 6) + 1;
  boysEl.src = `boys${boy}.jpg`;
  const girl = Math.trunc(Math.random() * 6) + 1;
  girlsEl.src = `girls${girl}.jpg`;
}
