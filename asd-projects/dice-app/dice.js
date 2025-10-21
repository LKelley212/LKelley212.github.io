$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 25)
    .css("width", 25)
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");

  function makeDot(top, left, elementID) {
    var colorById = {
      "#die": "rgb(99, 101, 224)",
      "#die2": "rgba(255, 255, 255, 1)",
    };
    var dotColor = colorById[elementID];

    $("<div>")
      .css("height", 18)
      .css("width", 18)
      .css("border-radius", "50%") // makes the square a circle
      .css("background-color", dotColor)
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(elementID);
  }

  makeDot(25, 25, "#die"); // top left
  makeDot(50, 25, "#die"); // middle left
  makeDot(75, 25, "#die"); // bottom left
  makeDot(25, 75, "#die"); // top right
  makeDot(50, 75, "#die"); // middle right
  makeDot(75, 75, "#die"); // bottom right

  makeDot(25, 25, "#die2"); // top left
  makeDot(50, 25, "#die2"); // middle left
  makeDot(75, 25, "#die2"); // bottom left
  makeDot(25, 75, "#die2"); // top right
  makeDot(50, 75, "#die2"); // middle right
  makeDot(75, 75, "#die2"); // bottom right

  function rollDie(dieID) {
    $(dieID).empty();
    console.log("clicked");
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);

    if (randomNum === 1) {
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(25, 25, dieID); // top left
      makeDot(75, 75, dieID); // bottom right
      makeDot(50, 50, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(50, 50, dieID); // middle middle
      makeDot(75, 75, dieID); // bottom right
      makeDot(25, 25, dieID); // top left
      makeDot(25, 75, dieID); // bottom left
      makeDot(75, 25, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(25, 25, dieID); // top left
      makeDot(50, 25, dieID); // middle left
      makeDot(75, 25, dieID); // bottom left
      makeDot(25, 75, dieID); // top right
      makeDot(50, 75, dieID); // middle right
      makeDot(75, 75, dieID); // bottom right
    }
  }
  function handleClick() {
    rollDie("#die");
    rollDie("#die2");
  }
  handleClick();
  $("#die").on("click", handleClick);
  $("#die2").on("click", handleClick);
});
