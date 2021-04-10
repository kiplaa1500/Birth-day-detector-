function names() {
    let cc = parseInt(document.getElementById("cent").value);
    let yy = parseInt(document.getElementById("yea").value);
    let mm = parseInt(document.getElementById("mon").value);
    let dd = parseInt(document.getElementById("Day").value);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (cc.value == "" || yy.value == "" || mm.value == "" || dd.value == "") {
        alert("No blank spaces allowed");

        var gender = document.querySelector('input[name="gender"]:checked').value;
        var day = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * dd / 4)) + ((26 * (mm + 1) / 10)) + yy) % 7;


        if (gender === "male") {
            if (day === 0) {
                alert("You were born on: " + days[0] + "and your Akan name is: " + maleNames[0]);
            }
            else if (day === 1) {
                alert("You were born on: " + days[1] + " and your Akan name is: " + maleNames[1]);
            }
            else if (day === 2) {
                alert("You were born on: " + days[2] + " and your Akan name is: " + maleNames[2]);
            }
            else if (day === 3) {
                alert("You were born on: " + days[3] + "and your Akan name is: " + maleNames[3]);
            }
            else if (day === 4) {
                alert("You were born on: " + days[4] + "and your Akan name is: " + maleNames[4]);
            }
            else if (day === 5) {
                alert("You were born on: " + days[5] + "and your Akan name is: " + maleNames[5]);
            }
            else if (day === 6) {
                alert("You were born on: " +days[6] + "and you Akan name is: " +maleNames[6])
            }

        }
    }
}