const gridContainer = document.querySelector("#grid-container");
const square = document.createElement("div");
const slider = document.querySelector("#grid-slider");
const displaySlider = document.querySelector("#sliderValue")
const button = document.querySelector("ul");
gridContainer.appendChild(square);
square.style.backgroundColor = "white";

let color = "black";

//Get color selection from buttons and if "clear" is chosen
//reset the grid

button.addEventListener('click', function (e) {
    if (e.target.id === "white") {
        slider.onchange();
    }
    else color = e.target.id;
});

//Random color generator ty stackoverflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

rgbValue = [];

function makeMoreGray(){
    rgbValue[0] += 25;
    rgbValue[1] += 25;
    rgbValue[2] += 25;
    return rgbValue;
} 

/////////////////////////////////////////////////////////////////
//convert color selection into an expression that can be passed//
//to colorChange()  Maybe add grayscale later                  //
/////////////////////////////////////////////////////////////////
function setColor() {
    if (color === "grayscale"){
        return makeMoreGray();
    }else if (color === "rave"){
        return getRandomColor();
    }else if(color === "black"){
        return "black";
    }
}

function colorChange(event) {
    rgbValue = event.target.style.backgroundColor;
    event.target.style.backgroundColor = setColor();
}

gridContainer.addEventListener("mouseover", colorChange, false);

slider.onchange = function() {
    displaySlider.textContent = slider.value;  
    let gridRow = [];
    let gridColumn = [];
    square.style.backgroundColor = "white";
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for (let i = 0; i < slider.value; i++) {
        gridColumn.push("auto");
        gridRow.push("auto");
    }
   
    gridContainer.style.gridTemplateColumns = gridColumn.join(" ");
    gridContainer.style.gridTemplateRows = gridRow.join(" ");
   
    for (let i=0; i < Math.pow(slider.value, 2); i++) {
        gridContainer.appendChild(square.cloneNode(true));
    }   
}





 