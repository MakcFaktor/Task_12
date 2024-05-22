document.addEventListener("DOMContentLoaded", function () {
  const buttonContainer = document.getElementById("buttonContainer");

  buttonContainer.addEventListener("click", function (event) {
    if (event.target && event.target.matches("button.myButton")) {
      const buttonNumber = event.target.getAttribute("data-button");
      alert(`Ви клікнули на кнопку ${buttonNumber}`);
    }
  });
});
