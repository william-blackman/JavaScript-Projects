
//a simple loop to find the highest square of 2 less than 1 million
function Call_Loop() {
    var x = 2;
    while (x<1000000) {
        x = x ** 2;
    }
    document.getElementById("loop").innerHTML = Math.sqrt(x);
}
//prints the length of any screen input
function string_length() {
    var str1 = document.getElementById("string").value;
    var len1 = str1.length;
    document.getElementById("length").innerHTML = `Your phrase was ${len1} characters long`;
}
//using a for loop to print items in a list
var lst1 = ["tuba", "bass", "guitar", "drums", "piano", "midi"];
var lst2 = "";
var counter = "";
function for_loop() {
    for (counter = 0; counter < lst1.length; counter ++) {
        lst2 += lst1[counter] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = lst2;
}
//array function to define car instances
function array_function() {
    var car = [];
    car[0] = "Tesla Model Y";
    car[1] = "Mustang Mach E";
    car[2] = "F150 Lightning";
    car[3] = "Next Modular Pod";
    document.getElementById("Array").innerHTML = "Your driverless taxi is arriving. Please board the " + car[3] + ".";
}
//defining a constant and changing or adding property:value combinations.
const car = {make:"Jeep", model:"Grand Cherokee", color:"Silver"};
function constant_function() {
    document.getElementById("constant").innerHTML = `I drive a ${car.make} ${car.model}.`;
    car.trim = "Limited";
    car.color = "Black";
    document.getElementById("constant").innerHTML = `I drive a ${car.color} ${car.make} ${car.model} ${car.trim}.`;
}
//using let with block scope
var x = "Hello";
document.write("<br><br><br>" + x);
{
    let x = "Goodbye";
    document.write("<br>" + x);
}
document.write("<br>" + x);

//utilizing the variable x that has global scope defined above
function multiply(x, y) {
    return x*y;
}

document.getElementById("return").innerHTML = "16 x 23 = " + multiply(16, 23);

//utilizing let with global scope and returning a phrase
let phone = {
    manufacturer: "Apple",
    model: "iPhone",
    os: "ios 16.5",
    version: "13",
    description : function () {
        return `This phone is an ${this.manufacturer} ${this.model} running on ${this.os}`;
        }
};

document.getElementById("phone_object").innerHTML = phone.description();

//utilizing a break statement
let num = ""; counter = 0;
while (counter < 10) {
    num += counter + "<br>";
    counter++;
    if (counter === 7) break;
};

document.getElementById("count").innerHTML = num;

//utilizing a continue statement
let num1 = ""; counter1 = 0;
while (counter1 < 4) {
    counter1++;
    if (counter1 === 2) continue;
    num1 += counter1 + "<br>";
};

document.getElementById("count2").innerHTML = num1;
