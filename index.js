function bookCab() {
let name = document.getElementById("name").value;
let distance = document.getElementById("distance").value;
let cabType = document.getElementById("cabType").value;
let rate = cabType === "Mini" ? 10 : cabType === "Sedan" ? 15 : 20;
let fare = rate * distance;
document.getElementById("result").innerHTML ="Booking Confirmed. Fare: ■" + fare;
return false;
}