const input = document.querySelector("#validation-input");
input.addEventListener("blur", validateInput);

const validLength = Number(input.getAttribute("data-length"));

function validateInput(e) {
  const inputLength = e.currentTarget.value.trim().length;

  if (inputLength === validLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (inputLength !== 0 && inputLength !== validLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else if (inputLength === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
}
