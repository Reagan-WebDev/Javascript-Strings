function Calculate(radius) {
    return PI * radius**2;
}
const PI = 3.142;
let result = Calculate(7);
document.getElementById("demo").innerHTML = "The area of the Circle is " + result;