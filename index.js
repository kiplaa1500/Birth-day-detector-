function names() {

    let cc = parseInt(document.getElementById("cent").value);
    let yy = parseInt(document.getElementById("yea").value);
    let mm = parseInt(document.getElementById("mon").value);
    let dd = parseInt(document.getElementById("Day").value);

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // if (cc.value == "" || yy.value == "" || mm.value == "" || dd.value == "") {
    //     alert("No blank spaces allowed");
    // }

    var gender = document.querySelector('input[name="gender"]:checked').value;
    var dayOfWeek = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * dd / 4)) + ((26 * (mm + 1) / 10)) + yy) % 7;

    if (gender === "male") {
        if (dayOfWeek === 0) {
            alert("You were born on: " + day[0] + " and your Akan name is: " + maleNames[0]);
        } else if (dayOfWeek === 1) {
            alert("You were born on: " + day[1] + " and your Akan name is: " + maleNames[1]);
        } else if (dayOfWeek === 2) {
            alert("You were born on: " + day[2] + " and your Akan name is: " + maleNames[2]);
        } else if (dayOfWeek === 3) {
            alert("You were born on: " + day[3] + " and your Akan name is: " + maleNames[3]);
        } else if (dayOfWeek === 4) {
            alert("You were born on: " + day[4] + " and your Akan name is: " + maleNames[4]);
        } else if (dayOfWeek === 5) {
            alert("You were born on: " + day[5] + " and your Akan name is: " + maleNames[5]);
        } else if (dayOfWeek === 6) {
            alert("You were born on: " + day[6] + " and you Akan name is: " + maleNames[6])
        }

    } else {
        if (dayOfWeek === 0) {
            alert("You were born on: " + day[0]);
            alert("Your Akan name is: " + femaleNames[0]);
        } else if (dayOfWeek === 1) {
            alert("You were born on: " + day[1]);
            alert("Your Akan name is: " + femaleNames[1]);
        } else if (dayOfWeek === 2) {
            alert("You were born on: " + day[2]);
            alert("Your Akan name is: " + femaleNames[2]);
        } else if (dayOfWeek === 3) {
            alert("You were born on: " + day[3]);
            alert("Your Akan name is: " + femaleNames[3]);
        } else if (dayOfWeek === 4) {
            alert("You were born on: " + day[4]);
            alert("Your Akan name is: " + femaleNames[4]);
        } else if (dayOfWeek === 5) {
            alert("You were born on: " + day[5]);
            alert("Your Akan name is: " + femaleNames[5]);
        } else if (dayOfWeek === 6) {
            alert("You were born on: " + day[6]);
            alert("Your Akan name is: " + femaleNames[6]);
        }
    }
}