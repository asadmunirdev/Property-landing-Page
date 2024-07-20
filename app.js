//! Go to Top

let goTopBtn = document.getElementById("goTopBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

//! Submit Form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwcp7mScGbVihMddEUcb6Ib3P7tkObMC4XKK96bQF0hlt4DLRr5T0f0AR2MLLU7Y72nOw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent succesfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//! Dark Mode
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let portfolioSection = document.querySelector("#portfolio");
let teamSection = document.querySelector("#team");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    navbar.classList.add("bg-dark"); // Add dark background to navbar
    navbar.classList.remove("bg-body-tertiary"); // Remove light background
    portfolioSection.classList.add("portfolio-dark"); // Add dark background to portfolio section
    portfolioSection.classList.remove("portfolio-light"); // Remove light background
    teamSection.classList.add("team-dark"); // Add dark background to team section
    teamSection.classList.remove("team-light"); // Remove light background

    // Update cards inside portfolio section
    let portfolioCards = portfolioSection.querySelectorAll(".card");
    portfolioCards.forEach((card) => {
      card.classList.add("bg-dark");
      card.classList.remove("bg-white");
      card.classList.add("text-light");
      card.classList.remove("text-dark");
    });

    // Update cards inside team section
    let teamCards = teamSection.querySelectorAll(".card");
    teamCards.forEach((card) => {
      card.classList.add("bg-dark");
      card.classList.remove("bg-white");
      card.classList.add("text-light");
      card.classList.remove("text-dark");
    });
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    navbar.classList.remove("bg-dark"); // Remove dark background from navbar
    navbar.classList.add("bg-body-tertiary"); // Restore light background
    portfolioSection.classList.remove("portfolio-dark"); // Remove dark background from portfolio section
    portfolioSection.classList.add("portfolio-light"); // Add light background to portfolio section
    teamSection.classList.remove("team-dark"); // Remove dark background from team section
    teamSection.classList.add("team-light"); // Add light background to team section

    // Update cards inside portfolio section
    let portfolioCards = portfolioSection.querySelectorAll(".card");
    portfolioCards.forEach((card) => {
      card.classList.remove("bg-dark");
      card.classList.add("bg-white");
      card.classList.remove("text-light");
      card.classList.add("text-dark");
    });

    // Update cards inside team section
    let teamCards = teamSection.querySelectorAll(".card");
    teamCards.forEach((card) => {
      card.classList.remove("bg-dark");
      card.classList.add("bg-white");
      card.classList.remove("text-light");
      card.classList.add("text-dark");
    });
  }
});
