function App() {
  var container = document.getElementById("container");

  // get the shape elements
  var circle = document.getElementById("circle");
  var square = document.getElementById("square");
  var triangle = document.getElementById("triangle");

  var pentagon = document.getElementById("pentagon");

  // animate function
  function animate(elem, startX, startY, bounce, duration) {
    // set and store the start positions (they'll need to be the same for the end position too)let posStartX;

    if (startX === "left") {
      posStartX = 0;
    } else {
      posStartX = 100;
    }

    // posX is the X position variable we'll update
    let posX = startX;

    // array for storing the keyframes
    let keyframes = [];

    // we're going to push a transform into the keyframes array for each bounce
    for (let i = 1; i <= bounce; i++) {
      let translateX;
      let translateY;
      if (i === 1 || i === bounce) {
        // if we're on the right side we need to do an additional translate to account for the size of the shape div
        translateX =
          startX === "right"
            ? `translateX(${posStartX}vw)translateX(-180px)`
            : `translateX(${posStartX}vw)`;
        translateY = `translateY(${startY}px)`;
      } else {
        // if we're on the right side we need to do an additional translate to account for the size of the shape div
        translateX =
          posX === "right"
            ? `translateX(100vw) translateX(-180px)`
            : `translateX(0vw)`;
        // for randomly picking Y, we want to translate up or down so pick randomly from '-' or '' first, then pick the pixels randomly
        translateY = `translateY(${
          ["-", ""][Math.floor(Math.random() * 2)]
        }${Math.floor(Math.random() * 200)}px)`;
      }

      // store the transformation
      let transform = `${translateX} ${translateY}`;

      keyframes.push({ transform: transform });

      // change the X position
      posX = posX === "right" ? "left" : "right";
    }
    var options = {
      duration: duration,
      iterations: Infinity,
    };
    elem.animate(keyframes, options);
  }

  // animate!
  animate(circle, "left", 12, 5, 36000);

  animate(square, "left", 60, 7, 37000);
  animate(triangle, "right", 27, 5, 38000);
  animate(pentagon, "right", 99, 7, 39000);
}

App();
