function myAge() {
    let currentAge = document.getElementById("myInput").value;
    if(currentAge <= 15) {
        document.getElementById("myHeader").innerHTML = "You are too Young to have a Girlfriend!";
    }
    else if(currentAge >= 16 && currentAge <= 30) {
        document.getElementById("myHeader").innerHTML = "You are Mature enough to have a Girlfriend";
    }
    else {
        document.getElementById("myHeader").innerHTML = "You are too Old to have a Girlfriend!";
    }
}