// Controller function(s)
// Function gets the values from the DOM input given by the user(s)
function getValues()
{
  // Get Values
  let fizzValue = parseInt(document.getElementById("fizzValue").value);
  let buzzValue = parseInt(document.getElementById("buzzValue").value);

  //check if values are numbers
  if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) 
  {
    // Call generateNumbers to create the numbers
    let fbData = fizzBuzzC(fizzValue, buzzValue);

    // Call displayNumbers to show the numbers or FizzBuzz words.
    displayData(fbData);
  }
  else
  {
    alert("You must enter integers");
  }
  
}

// Logic function(s)
// Function generates the data and pushes it to an array called fbData
// that is returned.
function fizzBuzz(_fizzValue, _buzzValue)
{
    let fbData = [];
    
    for(let index = 1; index <= 100; index++) 
    {
      //Check to see if divisible by both 3 and 5
      //Check to see if divisible by 3
      //Check to see if divisible by 5
      if (index % _fizzValue == 0 && index % _buzzValue == 0) {
        fbData.push("FizzBuzz");
      } else if (index % _fizzValue == 0) {
        fbData.push("Fizz");
      } else if (index % _buzzValue == 0) {
        fbData.push("Buzz");
      } else {
        fbData.push(index);
      }
    }

    return fbData;
}

function fizzBuzzB(_fizzValue, _buzzValue)
{
  let fbData = [];
  let Fizz = false;
  let Buzz = false;

  for(let i = 1; i <= 100; i++)
  {
    Fizz = i % _fizzValue == 0;
    Buzz = i % _buzzValue == 0;

    switch(true)
    {
      case Fizz && Buzz: {
        fbData.push("FizzBuzz");
        break;
      }        
      case Fizz:{
        fbData.push("Fizz");
        break;
      }
      case Buzz: {
        fbData.push("Buzz");
        break;
      } 
      default: {
        fbData.push(i);
        break;
      }   
    }
  }

  return fbData;
}

function fizzBuzzC(_fizzValue,_buzzValue)
{
  let fbData = [];

  for(let i = 1; i <= 100; i++)
  {
    let value = (( i % _fizzValue == 0 ? 'Fizz' : '') + (i % _buzzValue == 0 ? 'Buzz' : '') || i );

    fbData.push(value);
  }

  return fbData;
}


// Display function(s)
function displayData(fbData)
{

    // Get the table body element from the page
    let tableBody = document.getElementById("results");

    // Get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //Clear the table first
    tableBody.innerHTML = "";

    for(let index = 0; index < fbData.length; index += 5)
    {
        let tableRow = document.importNode(templateRow.content, true);
        
        //grab only the columns in the template and put into an array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[index]);
        rowCols[0].textContent = fbData[index];

        rowCols[1].classList.add(fbData[index + 1]);
        rowCols[1].textContent = fbData[index + 1];

        rowCols[2].classList.add(fbData[index + 2]);
        rowCols[2].textContent = fbData[index + 2];

        rowCols[3].classList.add(fbData[index + 3]);
        rowCols[3].textContent = fbData[index + 3];

        rowCols[4].classList.add(fbData[index + 4]);
        rowCols[4].textContent = fbData[index + 4];

        tableBody.appendChild(tableRow);
    }
}