const ratingBtns = [...document.querySelectorAll(".card__rating-button")];
const submitBtn = document.querySelector(".card__submit-btn");
const ratingText = document.querySelector(".user-rating");
const side1 = document.querySelector(".card__side1-container");
const side2 = document.querySelector(".card__side2-container");

let rating;

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const value = target.value;

    // remove style for the selected button on all buttons
    clearStyles();

    target.classList.add("chosen-btn");
    target.disabled = true;
    rating = value;
  });
});

submitBtn.addEventListener("click", (e) => {
  if (!rating) {
    console.log(rating);
    alert("choose a rating homie");
    return;
  }
  ratingText.textContent = rating;
  side1.style.display = "none";
  side2.style.display = "block";
});

function clearStyles() {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("chosen-btn");
    btn.disabled = false;
  });
}
