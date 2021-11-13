// Select color input
var color = document.getElementById("colorPicker").value;
var container = document.getElementById("pixelCanvas");
var size_choice = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;


// When size is submitted by the user, call makeGrid()
size_choice.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid(height, width);
});


function makeGrid(height, width) { 
    container.innerHTML = "";
    for (var i = 0; i < height; i++); {
        var row = document.createElement("tr");
        for (var x = 0; x < width; x++); {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
};
