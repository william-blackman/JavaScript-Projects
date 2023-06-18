function math_function() { //Simple addition function
    var addition = 8 + 22;
    document.getElementById("math").innerHTML = "8 + 22 =" + addition;
}

function subtraction() { //simple subtraction function
    var subtraction = 12-18;
    document.getElementById("subtraction").innerHTML = "12 - 18 = " + subtraction;
}

function multiply() { //simple multiplication function
    var multiplication = 18 * 0.5;
    document.getElementById("multiplication_problem").innerHTML = "18 x 0.5 =" + multiplication;
}

function divide() {   //simple division function
    var division = 20/3;
    document.getElementById("division_problem").innerHTML = "20 / 3 = " + division;
}

function math() {  //function with multiple math operations - this is the square root of a squared + b squared to find the hypotenuse of a triangle
    var hypotenuse = (3**2 + 5**2)**(1/2);
    document.getElementById("math2").innerHTML = `The hypotenuse of a triangle with sides lengths 3 and 5 is ${hypotenuse}`;
}

function math3() {  //this utilizes the modulus operator to find the remainder
    var remainder = 18 % 5;
    document.getElementById("math3").innerHTML = `The remainder when 18 is divided by 5 is ${remainder}.`;
}

function math4() {  //returning the negative of a variable
    var x = -10;
    document.getElementById("math4").innerHTML = `Negative x is ${-x}.`;
}

function math5() {  //incrementing
    var x = -10;
    x++
    document.getElementById("math5").innerHTML = `x +1 is ${x}.`;
}

function math6() {   //decrementing
    var x = -10;
    x--
    document.getElementById("math6").innerHTML = `x - 1 is ${x}.`; 
}

window.alert(Math.round(Math.random() * 100));  //using Math.random in conjuntion with the Math.round method to return a random integer between 0 and 100

document.write(`The square root of 16 is ${Math.sqrt(16)}`)  //using another Math method. This will appear first sicne it is not associated with an html element.