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
    toggleGrid();

    // TODO 2 - Create Platforms
    // createPlatform(X, Y, legnth, height, "color")

    createPlatform(300, 635, 350, 20, "black");
    createPlatform(100, 500, 250, 20, "red");
    createPlatform(800, 310, 500, 20, "limegreen");
    createPlatform(1000, 200, 500, 20, "orange");
    createPlatform(500, 425, 300, 20, "blue");
    createPlatform(350, 200, 300, 20, "hotpink");
    // TODO 3 - Create Collectables
    // createCollectable("Type", "X, Y, gravity, bounce")
    createCollectable("grace", 1250, 220, 0.5, 0.5);
    createCollectable("diamond", 505, 150, 0.7, 0.5);
    createCollectable("kennedi", 200, 450, 0.5, 0.5);

    // TODO 4 - Create Cannons

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
