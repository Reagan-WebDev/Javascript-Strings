
const CurrentYear = 2024;
function myCurrentAge() {
    return CurrentYear - YearOfBirth;
let YearOfBirth = document.getElementById("myInput").value;
document.getElementById("myHeader").innerHTML = "You are " + myCurrentAge + "years old";
}
