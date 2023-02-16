// Declare global variables
let numRows = 1;
let numCols = 3;
let colorSelected = 'white';

// Declare table variable
let table = document.getElementById("gridTable");

function handleColorChange(event) {
	event.target.style.backgroundColor = colorSelected;
}

// Add a row
function addR() {
  let newRow = document.createElement("tr");
	
  for (let i = 0; i < numCols; i++) {
    let newCell = document.createElement("td");
    newCell.onclick = handleColorChange;
    newRow.appendChild(newCell);
  }

	if(numCols === 0) {
		newRow.appendChild(document.createElement("td"));
		numCols++;
	}

  table.appendChild(newRow);
  numRows++;
}

// Add a column
function addC() {
  for (let i = 0; i < numRows; i++) {
    let row = table.children[i];
    let newCell = document.createElement("td");
    newCell.onclick = handleColorChange;
    row.appendChild(newCell);
  }
	if(numRows === 0) {
		let row = document.createElement("tr");
		row.appendChild(document.createElement("td"));
		table.appendChild(row);
		numRows++;
	}
  numCols++;
}

// Remove a row
function removeR() {
  if (numRows > 0) {
    table.removeChild(table.children[table.children.length - 1]);
    numRows--;
  }
	if(numRows === 0) numCols = 0;
}

// Remove a column
function removeC() {
  if (numCols > 0) {
    for (let i = 0; i < numRows; i++) {
			let lastChild = table.children[i].children[table.children[i].children.length - 1];
      table.children[i].removeChild(lastChild);
    }
    numCols--;
  }

	if(numCols === 0) numRows = 0;
}

// Set global variable for selected color
function selectColor(){
  colorSelected = document.getElementById("selectedColorId").value.toLowerCase();
}

// Fill all uncolored cells
function fillU(){
	const rows = table.children;
  for (let i = 0; i < numRows; i++) {
		const columns = rows[i].children;
    for (let j = 0; j < numCols; j++) {
			console.log(columns[j].style.backgroundColor);
			if (!columns[j].style.backgroundColor || columns[j].style.backgroundColor === 'white')
      columns[j].style.backgroundColor = colorSelected;
    }
  }
}

// Fill all cells
function fillAll(){
	const rows = table.children;
  for (let i = 0; i < numRows; i++) {
		const columns = rows[i].children;
    for (let j = 0; j < numCols; j++) {
      columns[j].style.backgroundColor = colorSelected;
    }
  }
}

// Clear all cells
// End of Code
function clearAll(){
	const rows = table.children;
  for (let i = 0; i < numRows; i++) {
		const columns = rows[i].children;
    for (let j = 0; j < numCols; j++) {
      columns[j].style.backgroundColor = 'white';
    }
  }
}
