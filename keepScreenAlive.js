var robot = require("robotjs");

function timer () {

    var awake = "I'm Awake!";

    var mouse = robot.getMousePos();

    robot.moveMouse(mouse.x, mouse.y + 1 );
    robot.moveMouse(mouse.x, mouse.y);

    setTimeout(timer, 600000); 

    console.log(awake);

}

timer();