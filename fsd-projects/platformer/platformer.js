$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    // createPlatform(X, Y, legnth, height, "color")

    createPlatform(300, 635, 350, 20, "black");
    createPlatform(75, 500, 250, 20, "red");
    createPlatform(225, 420, 75, 20, "purple");
    createPlatform(800, 310, 500, 20, "limegreen");
    createPlatform(1000, 200, 225, 20, "orange", 950, 1100, 1);
    createPlatform(1300, 150, 100, 20, "yellow");
    createPlatform(500, 398, 300, 20, "blue");
    createPlatform(350, 200, 300, 20, "hotpink");
    // TODO 3 - Create Collectables
    // createCollectable("Type", "X, Y, gravity, bounce")
    createCollectable("heartGem", 135, 450, 0.5, 0.5);
    createCollectable("roundGem", 240, 300, 0.5, 0.5);
    createCollectable("starGem", 505, 150, 0.7, 0.5);
    createCollectable("heartGem", 850, 220, 0.5, 0.5);
    createCollectable("starGem", 1200, 220, 0.5, 0.5);
    createCollectable("winner", 1350, 100);
    // TODO 4 - Create Cannons
    createCannon("right", 700, 1500);
    createCannon("bottom", 1200, 1000);
    createCannon("left", 200, 2500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
