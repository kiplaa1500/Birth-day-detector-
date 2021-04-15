function akanName() {
    let years = document.getElementById("input-year").value;
    let months = document.getElementById("input-month").value;
    let day = document.getElementById("input-day").value;
    let males = document.getElementById("input-male").checked;
    let females = document.getElementById("input-female").checked;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];



    let dateString = months + "/" + day + "/" + years;
    var birthDate = new Date(dateString);
    var weekdDays = birthDate.getDay();


    // conditions 

    if (day <= 0 || day > 31) {
        alert("Povide correct day details...");
    }
    else if (months < 1 || months > 12 || months == 2 && day > 29) {
        alert("Enter correct month datails... ");
    }
    else if (years <= 0 || years > 2021) {
        alert("Enter correct year deatils... ");
    }
    else if ((females === false)&&(males === false)) {
        alert("Select at-least one gender...");
    }
    else if (males === true) {
        alert("You were born on : " + days[weekdDays] + " and your AKAN name is : " + maleNames[weekdDays]);
    }
    else if (females === true) {
        alert("You were born on : " + days[weekdDays] + " and your AKAN name is : " + femaleNames[weekdDays]);
    }

    let form = document.getElementsByName('my-Form')[0];
    form.reset();
    return false;

}