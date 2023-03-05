const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
const display = document.querySelector("cards");


listButton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}

