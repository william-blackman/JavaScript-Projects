window.alert('Hello, World!');  //Opens a popup window to say Hello, world!

document.write('Hello, world!  ');  //Prints Hello, world in the browser

var var1 = "This is a string with a quote: \"I have a dream\"." + "--Martin Luther King"; var2 = "The King"; // strings assigned to variables

var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string. "; //more strings assinged to variables

document.write(Sent1 + Sent2); //concatenates Sent1 and Sent 2 and displays them in the browser

var x=12, y=4;  //integers assigned to variables
function add (a,b) { //adding function
    return a + b
};

function buttonColor() {
    document.getElementById("BuyButton").style.backgroundColor= 'blue';
    document.getElementById("BuyButton").style.color= 'white';
}

document.write(add(x,y)); //calls add function to add a & b