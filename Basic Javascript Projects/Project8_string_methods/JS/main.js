function str1() { //simple concatenation
    var x = "This is a part";
    var y = " of a full sentence.";
    document.getElementById("string1").innerHTML = x.concat(y);
}

function str2() { //slicing out pizza from the sentence
    var string2 = "The best slices are of pizza.";
    var section = string2.slice(-6, -1);
    document.getElementById("slice").innerHTML = section;
}

function str3() { //converting text to all uppercase
    var string3 = "this is all lowercase.";
    var upper = string3.toUpperCase();
    document.getElementById("str3").innerHTML = upper;
}

function str4() { //searching for the index that pizza starts at
    var string4 = "The best slices are of pizza.";
    var search = string4.search("pizza");
    document.getElementById("str4").innerHTML = search;
}

function str5() { //converting number to string
    var string5 = 10;
    document.getElementById("str5").innerHTML = string5.toString();
}

function str6() { //truncates pi to 6 total digits and remains a number
    var pi = Math.PI;
    document.getElementById("str6").innerHTML = pi.toPrecision(6);
}

function str7() { //truncates pi to 5 decimal places and makes it a string
    var pi = Math.PI;
    document.getElementById("str7").innerHTML = pi.toFixed(5);
}

function str8() { //converts 10 to its primitive value
    var x = 10;
    var y = x.valueOf();
    document.getElementById("str8").innerHTML = y;
    console.log(typeof(y));
}