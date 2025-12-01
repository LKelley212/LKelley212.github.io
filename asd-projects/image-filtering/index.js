// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  // applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(decreaseBlue);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var pixel = image[i][j];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      // pixelArray[RED] = 200;
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;

      /* console.log("pixel:", pixel);
      // pixel looks like "rgb(150, 150, 150)"
      console.log("pixelArray:", pixelArray);
      // pixelArray looks like [150, 150, 150]
      console.log("updatedPixel:", updatedPixel);
      console.log("new stored value:", image[i][j]);
      //verified that the image array has been updated to mach
      */
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var pixel = image[i][j];
      // If the pixel array is not equal to the background color, apply the filter
      if (pixel !== backgroundColor) {
        var pixelArray = rgbStringToArray(pixelArray);
        filterFunction(pixelArray);
      }

      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  return num < 0 ? (num = 0) : num > 255 ? 255 : num;
}

/* console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125 */

// TODO 4: Create reddify filter function
function reddify(colorArray) {
  colorArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(colorArray) {
  colorArray[BLUE] = colorArray[BLUE] - 50;
  keepInBounds(colorArray[BLUE]);
}
function increaseGreenByBlue(colorArray) {
  colorArray[GREEN] = colorArray[GREEN] + colorArray[BLUE];
  keepInBounds(colorArray[GREEN]);
}
// CHALLENGE code goes below here
