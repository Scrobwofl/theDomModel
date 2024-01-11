const headerText = document.querySelector("h1");
headerText.textContent = "Cat JPEG Minter";

const magicCatButton = document.querySelector("#magic-cat-button");
magicCatButton.addEventListener("click", catsButtonHandler);

const magicCatContainer = document.querySelector("#magic-cat-container");

function catsButtonHandler() {
  console.log(magicCatContainer);
  magicCatContainer.classList.toggle("visible");
}
