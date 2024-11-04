"use strict";

const awesomeness = document.querySelector(".awesome");
const btn = document.querySelector(".press");
const escText = document.querySelector(".esc");

awesomeness.classList.add("hidden");

btn.addEventListener("click", function () {
  awesomeness.classList.remove("hidden");
  escText.classList.remove("hidden");
  awesomeness.style.backgroundColor = "#bcf4f5";
  escText.textContent = `Press the ESCAPE button`;
  btn.textContent = " I hope you Enjoyed your surprise!";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !awesomeness.classList.contains("hidden")) {
    awesomeness.classList.add("hidden");
    escText.classList.add("hidden");
    btn.textContent = "PRESS ME FOR A SURPISE";
  }
});
