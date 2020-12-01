const input = document.querySelector("#input textarea");
const btn = document.querySelector("button");
const output = document.querySelector("#output textarea");
const alertModal = document.querySelector("#alertModal");

output.value = "";

btn.addEventListener("click", () => {
  output.value = "";

  if (!input.value) {
    alertModal.style.display = "inline";
    setTimeout(() => {
      alertModal.style.display = "none";
    }, 2000);
  } else {
    alertModal.style.display = "none";
    fetch(
      `https://api.funtranslations.com/translate/minion.json?text=${input.value}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        output.value = data.contents.translated;
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  }
  input.value = "";
});
