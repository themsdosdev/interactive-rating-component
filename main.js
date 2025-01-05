/** @format */
const d = document;
let numberContainer = d.querySelector(".card-start__buttons-container");
let rateNumber = d.querySelector(".card-thankyou__state-result-rating");
let submitBtn = d.querySelector(".card-start__buttons--submit");
let rateState = d.querySelector(".card-rating-state");
let thankYouState = d.querySelector(".card-thankyou__state");

let selectedNumber = null;

numberContainer.addEventListener("click", (e) => {
  let numberSelected = parseInt(e.target.textContent);

  if (numberSelected >= 1 && numberSelected <= 5) {
    selectedNumber = numberSelected;
    rateNumber.innerText = selectedNumber;
  }
});

submitBtn.addEventListener("click", () => {
  if (selectedNumber) {
    rateState.style.display = "none";
    thankYouState.style.display = "flex";
  } else {
    alert("Please select a rating before submitting.");
  }
});
