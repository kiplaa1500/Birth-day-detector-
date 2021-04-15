function haveAkanName() {


    let century = document.getElementById("cent").value;
    let yearOfBirth = document.getElementById("input-year").value;
    let monthOfBirth = Number(document.getElementById("input-month").value);
    let dayOfBirth = Number(document.getElementById("input-day").value);
    let genderA = document.getElementsByName("gender");

    function getGender() {
        for (var gender of genderA) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }


    var myGenderValue = getGender();
    console.log(myGenderValue);


    function validateMonth() {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            return false;
        } else {
            return true;
        }
    }

    function validateDate() {
        if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
            if (dayOfBirth > 28 || dayOfBirth < 1) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {

            } else {
                return true;
            }
        } else if (dayOfBirth < 1 || dayOfBirth > 31) {
            return false;
        } else {
            return true;

        }
    }

    let validMonth = validateMonth();
    let validDay = validateDate();

    let weekDay = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) + ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7)


    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    let index;

    if (weekDay == 0) {
        index = 6;
    } else {
        index = weekDay - 1;
    }

    console.log(index);


    if (myGenderValue === "male" && validMonth && validDay) {
        alert("You were born on : " + weekDays[index] + " and your Akan name is " + maleNames[index]);
        return false;
    } else if (myGenderValue === "female" && validMonth && validDay) {
        alert("You were born on : " + weekDays[index] + " and your Akan name is " + femaleNames[index]);
        return false;
    } else {
        alert("Kindly provide correct details...")
    }



}