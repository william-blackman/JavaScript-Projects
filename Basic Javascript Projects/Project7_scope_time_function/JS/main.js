var pi = parseFloat(Math.PI.toFixed(4)); //global variable pi rounded to 4 decimals

function tenxpi() { //function with local variable and utilizing global variable pi
    x = 10;
    y = x * pi;
    document.getElementById("scope").innerHTML = `Ten times pi is approximately ${y}.`;
}

function getTime() { //first if statement function - then also added an else.
    if (new Date().getHours() > 11) {
        x = "How was your morning?";
    }
    else {
        x = "Good Morning!";
    }
    document.getElementById("time").innerHTML = x;
}

function drive() { //if/else function with user input
    var age = document.getElementById("age").value;
    if (age >= 16) {
        x = "You are old enough to drive.";
    }
    else {
        x = "You are not yet old enough to have a drivers license.";
    }
    document.getElementById("years_old").innerHTML = x;
}

function Time_function() { //time reply function with if/else if/else
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}