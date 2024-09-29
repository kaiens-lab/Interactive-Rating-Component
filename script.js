const ratepage = document.querySelector(".rateContainer");
const thankPage = document.querySelector(".thankYouContainer");
const submitButton = document.getElementById("submit-btn");
const rateResult = document.getElementById("rating-result");
const selectedScore = document.getElementById("selected-score");

thankPage.style.display = "none";

function getSelectedRating() {
  return document.querySelector('input[name="rating"]:checked')?.value || 0;
}

function showThankYouPage(selectedValue) {
  selectedScore.textContent = selectedValue;
  ratepage.style.display = "none";
  thankPage.style.display = "flex";
}

submitButton.addEventListener("click", () => {
  const selectedValue = getSelectedRating();
  if (selectedValue > 0) {
    showThankYouPage(selectedValue);
  } else {
    alert("Please select a rating before submitting.");
  }
});
