// Get numbers from the Page 
function getValues() {
    //get values from the page 
    let startValue = document.getElementById("fizzValue").value;
    let endValue = document.getElementById("buzzValue").value;

    //parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Check to see if numbers are integers
    if(Number.isInteger(fizzValue)&& Number.IsInteger(buzzValue)){
        //we call generateNumbers 
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //we call displayNumbers 
        displayData(fbArray);
    } else {
        alert("You must enter integers")
    }

}

// Generate the numbers 
function fizzBuzz(fizzValue,buzzValue) {

    //init the returnArray 
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        if (i % fizzValue === 0 && i % buzzValue == 0) {
            returnArray('FizzBuzz');
        }else if (i % fizzValue == 0) {
            returnArray.push('Fizz');

        }else if (i % buzzValue == 0){
            returnArray.push('Buzz');

        } else {
            returnArray.push(i);
        }
        
    }


    return returnArray;
}

// Display the numbers 
function displayData(fbArray) {

    //get the table body element from table
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first 
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+= 5) {
        
        let tableRow =document.importNode(templateRow.content, true);

        //grab use the to put into the array 
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }
    // add the all the rows to the table 


}