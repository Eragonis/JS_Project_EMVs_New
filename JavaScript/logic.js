const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1,2,3,4,5,6,7,8,9];
const grid = 
[
 "","","",
 "","","",
 "","",""
];
let back = ["","",""]
let back_gridOne =
[
"","","",
"","","",
"","",""
];
let back_gridTwo = [
"","","",
"","","",
"","",""
];
let back_gridThree =
[
"","","",
"","","",
"","",""
];



let test = document.getElementById("test");
let increment = 0;
let currentScore = 0;
let score = document.getElementById('score');
let intervalId;



function startInterval(intervalTime) {
    if (intervalId) {
        clearInterval(intervalId); 
    }


    intervalId = setInterval(function () {
        let random = letters[Math.floor(Math.random() * letters.length)];
        test.innerHTML = random;
        back[increment] = random;
        increment++; 

        console.log(back); 
        if (increment === 3) {
            increment = 0; 
        }
    }, intervalTime); 
}



startInterval(1000);



document.getElementById('time').addEventListener('change', function () {
    let selectedInterval = parseInt(this.value);
    startInterval(selectedInterval); 
});



function updateScore(value){
    currentScore += value
    score.innerHTML = "Score: "+ currentScore;
}



document.getElementById('submit').addEventListener('click', function(){
    if (back[0] === back[2]) {
        updateScore(1);
    } else {
        updateScore(-1);
    }
});



document.getElementById('reset').addEventListener('click', function(){

    location.reload()
});



