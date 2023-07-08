function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please enter your first name");
        return false;
    }
}