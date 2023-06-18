document.write(typeof "a string") //prints the data type

document.write("80" + 35) //appends the 35 to 80 because they are different data types

function example1() { //returns True because a string is 'Not a number'
    document.getElementById("test").innerHTML = isNaN('This is a string');
}

function example2() { //false because 85 is a number
    document.getElementById("test2").innerHTML = isNaN(85);
}

function example3() { //returning infinity - divide by 0
    document.getElementById("test3").innerHTML = 10/0;
}

function example4() { //also infinity - greater than 2^308
    document.getElementById("test4").innerHTML = 5E310;
}

function example5() { //negative infinity 
    document.getElementById("test5").innerHTML = -5E310;
}

document.write(10 > 2); //will print true

document.write(10<2); //will print false

console.log(10<2) //will print false in the browser console

document.write(Math.PI == 3.14159) //will print false because they are not exactly the same - no room for close

function example6() { //data types and values are the same - true
    x = Math.LN2;
    y = Math.LN2;
    document.getElementById("test6").innerHTML = x === y;
}

function example7() { //data types and values are different - false
    x = 10;
    y = "Orange";
    document.getElementById("test7").innerHTML = x === y;
}

function example8() { //data types are different even though values are the same - false
    x = 10;
    y = "10";
    document.getElementById("test8").innerHTML = x === y;
}

function example9() { //data types are the same, but values are different - false
    x = 10;
    y = 8;
    document.getElementById("test9").innerHTML = x === y;
}

function example10() { //AND to return true
    x = Math.LN2;
    y = Math.LN2;
    document.getElementById("test10").innerHTML = x==y && 10>5;
}

function example11() { //AND to return false
    x = 10;
    y = 10;
    document.getElementById("test11").innerHTML = x>y && 10>5;
}

function example12() { //or to return true
    x = 10;
    y = "10";
    document.getElementById("test12").innerHTML = x>y || x>5;
}

function example13() { // OR to return false
    x = 10;
    y = 8;
    document.getElementById("test13").innerHTML = x<y || y>10;
}

function example14() {  //NOT to return true
    x = 10;
    y = 8;
    document.getElementById("test14").innerHTML = !(x > y);
}

function example15() {  //NOT to return false
    x = 10;
    y = 8;
    document.getElementById("test15").innerHTML = !(x === y);
}