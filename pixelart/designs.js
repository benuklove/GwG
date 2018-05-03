// Grid size listener
const form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);

// Color listener
const pickColor = document.getElementById('colorPicker');
pickColor.addEventListener('click', getColor);

// Main function to draw and interact with grid
function makeGrid(event) {
    event.preventDefault();

    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;

    const table = document.querySelector('#pixelCanvas');

    // Clear any previous grids
    const previousTable = table;
    while (previousTable.firstChild) {
      previousTable.removeChild(previousTable.firstChild);
    }

    // Get color from any changes to Color Picker
    function clickResponse (event) {
      event.target.style.backgroundColor = getColor();
    }

    // Draw the grid
    for (let h = 1; h <= height; h++) {
      const row = document.createElement('tr');
      for (let w = 1; w <= width; w++) {
        const cell = document.createElement('td');
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    // Listen for clicks on table, delegate actions to cells
    table.addEventListener('click', clickResponse);
  }

// Listener function to get value of 'color'
function getColor() {
  let color = document.getElementById('colorPicker').value;
  return color;
}
