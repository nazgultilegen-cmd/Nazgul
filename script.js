function calculate() {

    
    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    if (name === "" || weight <= 0 || height <= 0) {
        document.getElementById("output").innerHTML = "Please enter valid data.";
        return;
    }

    
    var heightMeters = height / 100;
    var bmi = weight / (heightMeters * heightMeters);

    
    bmi = bmi.toFixed(1);

    var category;

    

    if (bmi <= 15.9) {
        category = "Very Severely Underweight";
    } 
    else if (bmi <= 16.9) {
        category = "Severely Underweight";
    } 
    else if (bmi <= 18.4) {
        category = "Underweight";
    } 
    else if (bmi <= 24.9) {
        category = "Normal";
    } 
    else if (bmi <= 29.9) {
        category = "Overweight";
    } 
    else if (bmi <= 34.9) {
        category = "Obese Class I";
    } 
    else if (bmi <= 39.9) {
        category = "Obese Class II";
    } 
    else if ( bmi <= 99.9) {
        category = "Obese Class III";
    }
    else if (bmi => 99.9) {
        category = "invalid data";
    } 

    
    document.getElementById("output").innerHTML =
        "Hi, " + name + "!<br>" +
        "Your BMI is: " + bmi + "<br>" +
        "Category: " + category;
}
