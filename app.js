const gridContainer = document.querySelector("#grid-container");
const square = document.createElement("div");
const slider = document.querySelector("#grid-slider");
const displaySlider = document.querySelector("#sliderValue")

const gridSquare = square.classList.add("squareClass");
square.style.backgroundColor = "red";

slider.onchange = function() {
    displaySlider.textContent = slider.value;  
    let gridRow = [];
    let gridColumn = [];
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for (let i = 0; i < slider.value; i++) {
        gridColumn.push("auto");
        gridRow.push("auto");
    }
    gridContainer.style.gridTemplateColumns = gridColumn.join(" ");
    gridContainer.style.gridTemplateRows = gridRow.join(" ");
    console.log(gridRow);
    console.log(gridRow.join(" "));
    for (let i=0; i < Math.pow(slider.value, 2); i++) {
        gridContainer.appendChild(square.cloneNode(true));
    }
}



 