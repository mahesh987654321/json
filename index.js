const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
btnFormat.addEventListener("click", () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

  outputArea.value = formatted;
});
function myFunction() {
  document.getElementById("myForm").reset();
}
