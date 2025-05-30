console.log("Hello World");
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const randomindex = Math.floor(Math.random() * choices.length);
    return choices[randomindex]
}
const signbutton = document.querySelector("#signbutton");

function getHumanChoice(){
    signbutton.addEventListener("click", () =>{
    let sign = prompt("Stone, Paper or Scissor?").toLowerCase();
    const computerchoice = getComputerChoice();
    console.log("You chose:", sign);
    console.log("Computer chose:", computerchoice);
    

    if (sign == computerchoice){
        return ("its a tie");
    }else if(
    (sign == stone && computerchoice == scissor)||
    (sign == paper && computerchoice == stone)||
    (sign == scissor && computerchoice == paper)
    )
    {
        console.log("You Win!");
    }else
    {
        console.log("You lose");
    }
})
}
getComputerChoice();