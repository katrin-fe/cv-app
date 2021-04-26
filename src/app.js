function showInformation (event) {
  event.preventDefault();
  let freelanceText = document.querySelector("#show-freelance");
  freelanceText.innerHTML = "freelance-text freelance-text freelance-text freelance-text";
}

let freelance = document.querySelector("#freelancer");
freelance.addEventListener("click", showInformation);