
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
 //figure out what symbol the user selected (i.e. @, #, X, $)

function getSymbol(){
 var select = document.getElementById("brick").value;
// console.log(select)
  return select;
 }

function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");
    //console.log(getSymbol());
    console.log(height);

    // figure out the height the user typed (replace the "5" below)
   heightStr = document.getElementById("height").value;

    // here we convert the string to an int
   height = parseInt(heightStr);

    // draw the pyramid with the given height and symbol
    drawPyramid(height, getSymbol());

}

//hook up the slider's oninput event to our determineHeightAndThenDrawPyramid function
       document.getElementById("height").oninput = determineHeightAndThenDrawPyramid;

//when user selects a different symbol, re-render the pyramid
        document.getElementById("brick").onchange = determineHeightAndThenDrawPyramid;

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height, symbol) {

     // before drawing, clear the old content
        document.getElementById("pyramid").innerHTML = "";
        document.getElementById("heightnum").innerHTML = height ;


     // for each row....
     for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            // rowStr += "#";
            rowStr += symbol;
        }
        // create a text element with the string of characters

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);

        
    }
}
