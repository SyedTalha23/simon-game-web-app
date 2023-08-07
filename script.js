

let randBtnPressList=[];
let currentLvl=1;
let userBtnPressList=[];
let currentBtnPress;
let userInputCountCounter=0;



$(".btn").on("click",function () { 
    console.log("buttonclick top ran")
    currentBtnPress= this.getAttribute("id");
    $("#"+currentBtnPress).fadeOut()
    $("#"+currentBtnPress).fadeIn()
    userBtnPressList.push(parseInt(currentBtnPress));
    userInputCountCounter++;
    checkUserMoves();
    console.log("buttonclick bottom ran")
    

})


$(document).on("keydown",function (e) {   
    console.log("7777777777777777777777777777777777777777      "+e.key)  
    if(e.key==="s"||e.key==="S"){
        randBtnPressList=[];
        currentLvl=1;
        userBtnPressList=[];
        currentBtnPress;
        userInputCountCounter=0;
        game();
    }
    
});


function game(){
    $("#level-title").html("LEVEL "+currentLvl);
    computerPlays();
}

function computerPlays() {
    let randBtn=Math.floor(Math.random()*4 + 1);
    randBtnPressList.push(randBtn);
    if(randBtn===1){
        $("#1").fadeOut();
        $("#1").fadeIn();
        let sound=new Audio("sounds/green.mp3");
        sound.play();
    }
    else if(randBtn===2){
        $("#2").fadeOut();
        $("#2").fadeIn();
        let sound=new Audio("sounds/red.mp3");
        sound.play();    
    }
    else if(randBtn===3){
        $("#3").fadeOut();
        $("#3").fadeIn();
        let sound=new Audio("sounds/yellow.mp3");
        sound.play();    
    }
    else if(randBtn===4){
        $("#4").fadeOut();
        $("#4").fadeIn();
        let sound=new Audio("sounds/blue.mp3");
        sound.play();    
    }

    console.log("randBtn",randBtn)
    console.log("randBtnPressList ",randBtnPressList)
    console.log("computerPlays ran");
}

function checkUserMoves() {
    console.log("checkUserMoves top ran");
    // console.log("userInputCountCounter-1 ",userInputCountCounter-1);
    // console.log("currentBtnPress: ",currentBtnPress);
    // console.log("randBtnPressList[userInputCountCounter-1] ",randBtnPressList[userInputCountCounter-1]);
    console.log("checkUserMoves if condition = ",currentBtnPress!=randBtnPressList[userInputCountCounter-1]);
    if(currentBtnPress!=randBtnPressList[userInputCountCounter-1]){
        console.log("if ran");
        let sound=new Audio("sounds/wrong.mp3");
        sound.play();
        gameEnded();
        
    }
    else if(userInputCountCounter===currentLvl){
        console.log("else ran")
        currentLvl+=1;
        userBtnPressList=[];
        userInputCountCounter=0;
        $("#level-title").html("LEVEL "+currentLvl);
        setTimeout(function(){
            
            computerPlays();
        },2000);
        console.log(" ")
        console.log("LVL UP HAPPENED=================================")
        console.log(" ")
    }
    console.log("checkUserMoves bottom ran");
    

}

function gameEnded(){
    randBtnPressList=[];
    currentLvl=1;
    userBtnPressList=[];
    currentBtnPress;
    userInputCountCounter=0;
    
    $("#level-title").html("GAME OVER, press \"s\" to restart");
    setTimeout(function () {
        alert("game ended");
    },500)
}




