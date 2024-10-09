(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

const userBtn = document.getElementById("modal-btn");
userBtn.addEventListener("click", () => {
  const userName = document.querySelector(".header__btn-text");
  const userInput = document.getElementById("modal-input").value;

  if (userInput.length > 1) {
    userName.textContent = `Вітаємо, ${userInput}!`;
  } else {
    alert("Error. Your name is incorrect");
  }
});
const headerForm = document.querySelector(".modal__form");
headerForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const allCard = document.getElementById("header-all");
const numsCard = document.getElementById("header-nums");
const gamesCard = document.getElementById("header-games");
const seeCard = document.getElementById("header-see");
const cards = [
  document.querySelector(".card-one"),
  document.querySelector(".card-two"),
  document.querySelector(".card-three"),
  document.querySelector(".card-four"),
  document.querySelector(".card-five"),
  document.querySelector(".card-six"),
  document.querySelector(".card-seven"),
  document.querySelector(".card-eight"),
  document.querySelector(".card-nine"),
  document.querySelector(".card-ten"),
];
function displayCards(arr) {
  cards.forEach((card, ind) => {
    card.style.display = arr.includes(ind) ? "block" : "none";
  });
}
allCard.addEventListener("click", () => {
  displayCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
numsCard.addEventListener("click", () => {
  displayCards([0, 1, 3, 4, 7]);
});
seeCard.addEventListener("click", () => {
  displayCards([8, 9]);
});
gamesCard.addEventListener("click", () => {
  displayCards([2, 5, 6]);
});

const headerSelectBtn = document.querySelector(".header__text");
const headerSelectList = document.querySelector(".header__select");
headerSelectBtn.addEventListener("click", () => {
  headerSelectList.classList.toggle("visible");
});

const themeBtn = document.getElementById("header-btn");
const containers = document.querySelectorAll(".container");
const headerTheme = document.querySelector("#header-theme");
let isDarkTheme = false;
themeBtn.addEventListener("click", () => {
  containers.forEach((container) => {
    if (isDarkTheme) {
      container.classList.add("light-theme");
      container.classList.remove("dark-theme");
      headerTheme.src = "./images/dark-version.png";
    } else {
      container.classList.add("dark-theme");
      container.classList.remove("light-theme");
      headerTheme.src = "./images/light-version.png";
    }
  });
  isDarkTheme = !isDarkTheme;
});
