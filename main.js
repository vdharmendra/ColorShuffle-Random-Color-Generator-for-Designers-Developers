// SELECTING CONTAINER
const containerDiv = document.querySelector(".container");
// APPENDING THE COLOR CODE TO CONTAINER
for (let index = 0; index < 30; index++) {
  const colorContainerDiv = document.createElement("div");
  colorContainerDiv.classList.add("color-container");
  containerDiv.appendChild(colorContainerDiv);
}

const colorContainerDivs = document.querySelectorAll(".color-container");

generateColors();
// DELCARING GENERATE COLOUR FUNCTION
function generateColors() {
  colorContainerDivs.forEach((colorContainerDiv) => {
    const newColorCode = randomColor();
    colorContainerDiv.style.backgroundColor = "#" + newColorCode;
    colorContainerDiv.innerText = "#" + newColorCode;
  });
}
// DELCARING FUNCTION FOR RERTUNING RANDOM HEXA CODE FOR COLOR
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
