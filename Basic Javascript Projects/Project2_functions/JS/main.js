function sum (a,b) { //this will add two numbers
    return a + b;
}
var a = 10, //assigning integers to variables
b = 13;

function buttonColor() { //once clicked this will change the button color to blue w/white text and replace the text with the sum of a & b.
    document.getElementById("Button").style.backgroundColor= 'blue';
    document.getElementById("Button").style.color= 'white';
    document.getElementById("Button").textContent= sum(a,b)
}

function myFunction() { //This will add to a sentence variable and replace the text with id "Concatenate" while the mouse hovers over
    var sentence = "Too";
    sentence += " slow!";
    document.getElementById("Concatenate").innerHTML = sentence;
}