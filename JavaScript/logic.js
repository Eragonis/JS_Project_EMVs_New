const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const gridsymbol = "🔴";
let back = [""]
let grid = 
[
    [
    "","","",
    "","","",
    "","",""
    ],
    [
     "","","",
     "","","",
     "","",""
    ],
    [
    "","","",
    "","","",
    "","",""
    ]
]
let test = document.getElementById("test");
let increment = 0;
let currentScore = 0;
let score = document.getElementById('score');
let intervalId;
let pattern = 0;

document.getElementById('mode').addEventListener('change', function(){

    pattern = parseInt(this.value, 10)    

    });

    function startInterval(intervalTime) {
    if (intervalId) {
        clearInterval(intervalId); 
    }
    
    intervalId = setInterval(function () {
        
        if (pattern === 1){
            
            if(back.length == 3){
                back.pop();
            }
            
            let random = numbers[Math.floor(Math.random()*numbers.length)]
            test.innerHTML = random;
            back.unshift(random);
            console.log(back);     
             
        };
                   
        if(pattern === 2){
             
            if(back.length == 3){
                back.pop();
            }
            
            let random = letters[Math.floor(Math.random()*letters.length)]
            test.innerHTML = random;
            back.unshift(random);
            console.log(back);
            
        }
            
        if(pattern === 3){
            
           if(grid.length == 3){
               back.pop();
           }
           
           let random = numbers[Math.floor(Math.random()*numbers.length)]
           test.innerHTML = random;
           back.unshift(random);
           console.log(back);
           
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


/*function patterns(){
  
    let increment = 0;
    if (pattern === 1){
        let random = numbers[Math.floor(Math.random()*numbers.length)];
        test.innerHTML = random;
        back[increment] = random;
        increment++;
        if(increment === 3){
            increment = 0;
        }
        
    }
    if (pattern === 2){

    }
    if (pattern === 3){

    }
}
*/
