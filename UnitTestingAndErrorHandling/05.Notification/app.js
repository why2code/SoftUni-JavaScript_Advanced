function notify(message) {
  let outputDiv = document.getElementById("notification");
  outputDiv.textContent = message;
  outputDiv.style.display = "block";

  outputDiv.addEventListener("click", showOrHide);

  function showOrHide(e) {
    e.target.style.display = "none";
  }

}
