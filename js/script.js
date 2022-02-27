const input = document.getElementById("input");

const submit = document.getElementById("button");
const error = document.getElementById("error");
const sucess = document.getElementById("sucess");

submit.addEventListener("click", function () {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value.toLowerCase())) {
    error.style.display = "block";
    sucess.style.display = "none";
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
    error.style.display = "none";
    sucess.style.display = "block";
  }
  input.value = "";
});
