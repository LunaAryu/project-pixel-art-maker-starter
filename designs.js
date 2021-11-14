// Select color input & define other variables
var color = document.getElementById("colorPicker")
var container = document.getElementById("pixelCanvas");
var size_choice = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
size_choice.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid(height, width);
});

// This function generates a grid with given height/weight values
function makeGrid(height, width) { 
    container.innerHTML = "";
    for (var i = 0; i < height.value; i++) {
        var row = document.createElement("tr");
        for (var x = 0; x < width.value; x++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
};

// Changes cell's color according to the user's choice
container.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target && event.target.nodeName == "TD") {
        event.target.style.backgroundColor = color.value;
    }   
});