const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("change", handleChange);

function handleChange({ currentTarget }) {
  refs.span.style.fontSize = `${currentTarget.value}px`;
}

// Variant 2 ------------

// function handleChange(e) {
//   refs.span.style.fontSize = e.currentTarget.value.concat("px");
// }