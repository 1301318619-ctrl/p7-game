console.log("Script started");
let currentSize = 50;
let timeLeft = 20;

// Start the game
function start() {
    createSquare(50, "red");
    createSquare(60, "green");
    createSquare(70, "blue");
    createSquare(80, "orange");
    console.log(Math.random() * 1000);
    setTimeout(updateTimer, 1000);
}

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft - 1;
    timer.innerText = timeLeft + "s";
    
    if (timeLeft == 0) {
        alert("Game Over!");
    } else {
        setTimeout(updateTimer, 1000); // Keep going if not 0
    }
}



// Creates a square
function createSquare(size, color) {
    // Create an element (div)
    let square = document.createElement("div");

    // Set some styles to make it a square
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.borderRadius = "16px";
    square.style.top = getRandomY() + "px";
    square.style.left = getRandomX() + "px";

    // Add it to the page
    document.body.appendChild(square);

    // Add click event
    square.addEventListener("click", handleClick);
}

// Generate a random x coordinate
function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

// Generate a random y coordinate
function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}
// Handle the player clicking a square
function handleClick(event) {
    let square = event.target;
    console.log(square.style.width);
    if (square.style.width == 50 + "px"){
        console.log("first square");
        square.remove();
    }
    if (square.style.width == 60 + "px"){
        square.remove();
    }
    if (square.style.width == 70 + "px"){
        square.remove();
    }
    if (square.style.width == 80 + "px"){
        square.remove();
    }

}
let timerInterval; // Add this at the top with your other variables

function start() {
    createSquare(50, "red");
    createSquare(60, "green");
    createSquare(70, "blue");
    createSquare(80, "orange");
    timerInterval = setInterval(updateTimer, 1000); // Store it
}

function updateTimer() {
    let timer = document.getElementById("timer");
    timeLeft = timeLeft - 1;
    timer.innerText = timeLeft + "s";
    
    if (timeLeft == 0) {
        alert("Game Over!");
        clearInterval(timerInterval); // Stop the timer
    }
}
