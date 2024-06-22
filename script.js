let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("user_score")
const compscorepara=document.querySelector("computer_score")
const genComputerChoice=()=>{
const option=["rock","paper","scissers"];
const randid =Math.floor(Math.random() * 3);
return option[randid]}
const drawGame = ()=>{
    console.log("Game was draw")
    msg.innerHTML="Game was draw. Play again"
    // msg.computedStyleMap.backgroundcolor="red"
    
}
const showWiner=(uerwin)=>{
if(uerwin){
    console.log(`You win!`)
    msg.innerHTML="You win!";
}
else{
    console.log(`You lose!`)
    msg.innerHTML="You lose!"
    
}
}
const playGame=(userChoice)=>{
console.log(
"user choice =" ,userChoice)
const compchoice=genComputerChoice();
console.log(
    "computer choice =" ,compchoice);
    if(userChoice===compchoice){
    drawGame();
    }
    else{
        let uerwin=true;
        if(userChoice==="rock"){
            uerwin=compchoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            uerwin=compchoice==="rock" ? false : true;
        }
        else{
            uerwin=compchoice==="rock" ?false : true;
        }
        showWiner(uerwin)
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        let userChoice=choice.getAttribute("id");
        // console.log("choice was cliked" , userChoice);
        playGame(userChoice);
    })
})
