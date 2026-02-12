$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 75)
    .css("width", 75)
    .css("background-color", "#3457D5")
    .css("position", "absolute")
    .css("top", 212.5)
    .css("left", 212.5)
    .css("border-radius", "50%")
    .appendTo("#die");

  function makeDot(top, left, elementID) {
    $("<div>")
      .css("height", 75)
      .css("width", 75)
      .css("background-color", "#3457D5")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .css("border-radius", "50%")
      .appendTo(elementID);
  }
  makeDot(212.5, 212.5, "#die"); // middle middle
  makeDot(87.5, 87.5, "#die"); // top left
  makeDot(337.5, 337.5, "#die"); // bottom right

  function rollDie(dieId) {
    console.log("clicked");
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
  }
  function handleClick() {
    rollDie("#die");
  }
  $("#die").on("click", handleClick);
});
