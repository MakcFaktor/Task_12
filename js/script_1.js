document.addEventListener("DOMContentLoaded", function () {
  let savedLink = "";

  const promptButton = document.getElementById("promptButton");
  const redirectButton = document.getElementById("redirectButton");

  promptButton.addEventListener("click", function () {
    savedLink = prompt("Будь ласка, введіть посилання:");
  });

  redirectButton.addEventListener("click", function () {
    if (savedLink) {
      window.location.href = savedLink;
    } else {
      alert("Будь ласка, спочатку введіть посилання.");
    }
  });
});
