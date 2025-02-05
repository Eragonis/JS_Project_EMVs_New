const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let test = document.getElementById("test");


setInterval(function () {
    test.innerHTML += letters[Math.floor(Math.random() * letters.length)];

}, 1000);
