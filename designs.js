// Select color input
// Select size input

var sizeM = 1;
var sizeN = 1;
var brushColor = document.querySelector("#colorPicker").value;

function checkRemoveOldGrid(){
    const existingGrid = document.querySelector('tbody');
    // If the grid does not exist then do nothing, else empty the grid
    existingGrid === null ? console.log("No old grid to remove") : existingGrid.remove();
}

const formDataToGrid = function (gridFormData) {

    //TODO: limit width by linking to screen size and log override in console

    sizeM = gridFormData.target[0].value;
    sizeN = gridFormData.target[1].value;
    console.log('Grid size is ' + sizeM + ' by ' + sizeN);
    makeGrid();

    gridFormData.preventDefault();
}

const colorDetailSetter = function (pixelArtColorData) {
    brushColor = pixelArtColorData.target.value;
    console.log('Brush color has been set to ' + brushColor);
}

const formSizePicker = document.querySelector('#sizePicker');
formSizePicker.addEventListener('submit', formDataToGrid);

/*-- TODO: 
formSizePicker addEventListener 'change'
- if formSizePicker values change and there is a tbody, then 
  - ask user if they want to save current pixel art
--*/

const formColorPicker = document.querySelector('#colorPicker');
formColorPicker.addEventListener('change', colorDetailSetter);


// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!

    const newTableBody = document.createElement('tbody');

    const respondToTheClick = function (evt) {
        console.log('A cell was clicked. clientX value = ' + evt.clientX + ', clientY value = ' + evt.clientY + ', pageY value = ' + evt.pageY);
        console.log('Node name of event is ' + evt.target.nodeName + ' event target \n' + evt.target.textContent);

        if (evt.target.nodeName === 'TD') { // Remember that nodeName returns Uppercase ONLY
            evt.target.style.background = brushColor;
        }

    }
    newTableBody.addEventListener('click', respondToTheClick);

    for (let i = 0; i < sizeM; i++) {
        const newRow = document.createElement('tr');
        for (let j = 0; j < sizeN; j++) {
            const newTableElement = document.createElement('td');
            newTableElement.textContent = ' ';
            newTableElement.style.background = 'white';
            newRow.appendChild(newTableElement);
        }
        newTableBody.appendChild(newRow);
    }

    const tableArea = document.querySelector('#pixelCanvas');
    checkRemoveOldGrid();
    
    tableArea.appendChild(newTableBody);

}
