let activePlayer = 'X';
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x1.png")';
        } else {
            select.style.backgroundImage = 'url("images/o1.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer ==='X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //This function plays placement sound
        audio('./media/blop.wav');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    //This function results in a random square being selected by the computer.
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//This function checks for a win condition and sets the coordinates for the win line
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //if more than 9 turns tie sound is played and game is reset
    else if (selectedSquares.length >= 9) {
        audio('./media/sad.wav');
        setTimeout(function () { resetGame(); }, 500);
    }
}
//this function checks for 3 in a row - if there are three in a row then it returns true
//and the else if condition executes the drawWinLine() function.
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) { return true; }
}

//this makes the grid unclickable for 1 second to allow for the computer turn
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//this plays all of the audio clips
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//this function utilized the canvas to draw the win lines using the coordinates assigned above
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //these temporarily store the data for the animation loop
        x = x1,
        y = y1;
    //this function does the actual animation of the line drawing and checks if the line has reached the endpoints
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This is necessarry for the 6,4,2 win scenario since the line is going up and to the right vs down or across
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //this clears the canvas after the line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    //this plays the win sound
    audio('./media/tada.flac');
    animateLineDrawing();
    //this clears and calls the resetGame function
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//this resets the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}