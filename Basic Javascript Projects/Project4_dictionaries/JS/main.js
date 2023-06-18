function car_details() { //creating a function with key:value pairs
    var cars = {
        make:"Jeep",
        model:"Grand Cherokee",
        color:"Silver",
        trim:"Limited",
    };
    delete cars.color //deletes the value Silver
    document.getElementById("dict1").innerHTML = cars.model; //outputs Grand Cherokee
};
