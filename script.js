// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = 'white'; 


Array.prototype.myMap = function(callback, thisArg) {
	const array = this;
	const length = array.length;
	let newArray = new Array(length);

	for (let index = 0; index < length; index++) {
		newArray[index] = callback.call(thisArg, array[index], index, array);
	}
	return newArray;
}

Array.prototype.myFilter = function(callback, thisArg) {
	const array = this;
	const length = array.length;
	let newArray = new Array();

	for (let index = 0; index < length; index++) {
		if (callback.call(thisArg, array[index], index, array)) {
			newArray.push(array[index]);
		}
	}
	return newArray;
}

Array.prototype.mySome = function(callback, thisArg) {
	const array = this;
	const length = array.length;

	for (let index = 0; index < length; index++) {
		if (callback.call(thisArg, array[index], index, array)) {
			return true;
		}
	}
	return false;
}

Array.prototype.myEvery = function(callback, thisArg) {
	const array = this;
	const length = array.length;

	for (let index = 0; index < length; index++) {
		if (!callback.call(thisArg, array[index], index, array)) {
			return false;
		}
	}
	return true;
}

Array.prototype.myReduce = function(callback, initialValue) {
	const array = this;
	const length = array.length;

	let index = 0;
	let accumulator = initialValue;
	
	if (accumulator === undefined) {
		accumulator = array[0];
		index = 1;
	}

	for (; index < length; index++) {
		accumulator = callback(accumulator, array[index], index, array);
	}
	return accumulator;
}

Array.prototype.myIncludes = function(valueToFind, fromIndex=0) {
	const array = this;
	const length = array.length;

	for (let index = fromIndex || 0; index < length; index++) {
		if (array[index] === valueToFind) {
			return true;
		}
	}
	return false;
}

Array.prototype.myIndexOf = function(valueToFind, fromIndex=0) {
	const array = this;
	const length = array.length;
	
	if(fromIndex < 0) fromIndex = length + fromIndex;
	if(fromIndex < 0) fromIndex = 0;

	for (let index = fromIndex || 0; index < length; index++) {
		if (array[index] === valueToFind) {
			return index;
		}
	}
	return -1;
}

Array.prototype.myLastIndexOf = function(valueToFind, fromIndex=this.length - 1) {
	const array = this;
	const length = array.length;

	if(fromIndex < 0) fromIndex = length + fromIndex;
	if(fromIndex < 0) return -1;
	if(fromIndex >= length) fromIndex = length - 1;

	for (let index = fromIndex || length - 1; index >= 0; index--) {
		if (array[index] === valueToFind) {
			return index;
		}
	}
	return -1;
}

Object.prototype.myKeys = function() {
	const object = this;
	const keys = [];

	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			keys.push(key);
		}
	}
	return keys;
}

Object.prototype.myValues = function() {
	const object = this;
	const values = [];

	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			values.push(object[key]);
		}
	}
	return values;
}


// Select The table
let table = document.getElementById("grid");


// Check if table has a tbody or not and fix table selection in case.
if(table.children.length === 1 && table.children[0].tagName === "TBODY") 
	table = table.children[0];


// Fix numCols and numRows if table has rows and columns
numRows = table.children.length;
numCols = table.children[0].children.length;

console.log(numRows, numCols);
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
//End of code new changes made to script file
//Code should be finieshed here
//function clearAll will be declared in the line coming up
function clearAll(){
	const rows = table.children;
  for (let i = 0; i < numRows; i++) {
		const columns = rows[i].children;
    for (let j = 0; j < numCols; j++) {
      columns[j].style.backgroundColor = 'white';
    }
  }
}

