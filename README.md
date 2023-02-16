# Assignment 2: JavaScript Methods 
# Name: Darnell Chambers Gordon
# GitHub Username: YaBoiNellz
# GitHub Repository Link: https://github.com/YaBoiNellz/Assignment2
# Group Members: None

In this assignment I recreated the methods using Javascript methods 

    Explanation for Solution:
    Function addR:
	I created a new row element 'tr'.

	case of numCols > 0:
		I appended numCols 'td' elements inside of it.
		
	
	case of numCols == 0:
		I append One 'td' element inside of it.
		Added one to numCols
	
	Added one to numRows





Function addC:
	case of numRows > 0:
		I looped over numRows and add a new 'td' element at last to each row.
	
	case of numRows == 0:
		I created a new row element 'tr'.
		I append a new 'td' element to this row.
		I append this row to the table.
		add one to numRows.
	
	add one to numCols.



Function removeR:
	case of numRows > 0:
		remove lastChild of table.
		substract one from numRows.
	
		case of numRows == 0 after removing lastChild :
			make numCols = 0 (to assure consistency  because if there's no row basically there's no column.)



Function removeC:
	case of numRows > 0:
		I removed the  lastChild of table.
		substract one from numRows.
	
		case of numRows == 0 after removing lastChild :
			make numCols = 0 (to assure consistency  because if there's no row basically there's no column.)

