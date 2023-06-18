function Vote_Function() {  //utilizing ? ternary operation
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vechicle(Make, Model, Year, Color) { //constructor function 1
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vechicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vechicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vechicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    //Function to display the results of constructor function 1
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    `Erik drives a ${Erik.Vehicle_Color}-colored ${Erik.Vehicle_Model} 
    manufactured in ${Erik.Vehicle_Year}`;
}

function Shoe(Brand, Color, Size) { //constructor function 2
    this.Shoe_Brand = Brand;
    this.Shoe_Color = Color;
    this.Shoe_Size = Size;
}

var Mark = new Shoe("Nike", "white", 11);

function Shoe_Function() { //Display results of Constructor function 2
    document.getElementById("New_and_This").innerHTML = `Mark wears 
    size ${Mark.Shoe_Size} ${Mark.Shoe_Color} ${Mark.Shoe_Brand}\'s.`;
}

function tribal_enrollment(native, tribe, active, history) { //testing reserved words - changed varialbe from default to active to make this work - native is no longer reserved but is still not recommended for use because of older browsers
    this.native = native;
    this.tribe = tribe;
    this.default = active;
    this.history = history;
}

var William = new tribal_enrollment("yes","Gwich\'ee Zhee","active","recent")

function enrollment() {
    document.getElementById("enrollment").innerHTML = William.default
}

function adding() { //creating a nested function
    document.getElementById("Nested_Function").innerHTML = add()
    function add() {
        var num1 = 8.5;
        function plus_one() {num1++};
        plus_one();
        return num1
    }
}
