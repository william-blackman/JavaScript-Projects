function color_function() {
    var color = document.getElementById("color").value;
    var color_output;
    var color_string = ' is a great color!'
    switch(color) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Orange":
            color_output = "Orange" + color_string;
        break;
        case "Blue":
            color_output = "Blue" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Purple":
            color_output = "Purple" + color_string;
        break;
        case "Yellow":
            color_output = "Yellow" + color_string;
        break;
        case "Cyan":
            color_output = "Cyan" + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as it was written in the above list"
    }
    document.getElementById("output").innerHTML = color_output;
}

function by_class() {
    var A = document.getElementsByClassName("option");
    A[0].innerHTML = "Cyan";
}

var c = document.getElementById("box1");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(0.5, "white");
grd.addColorStop(1, "blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,20);
