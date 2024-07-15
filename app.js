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
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    navbar.classList.add("bg-dark"); // Add dark background to navbar
    navbar.classList.remove("bg-body-tertiary"); // Remove light background
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    navbar.classList.remove("bg-dark"); // Remove dark background from navbar
    navbar.classList.add("bg-body-tertiary"); // Restore light background
  }
});
