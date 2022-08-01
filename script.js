const ratingBtns = [...document.querySelectorAll(".card__rating-button")];
const submitBtn = document.querySelector(".card__submit-btn");

let rating = 1;

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
  console.log("hi");
});
function clearStyles() {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("chosen-btn");
    btn.disabled = false;
  });
}
