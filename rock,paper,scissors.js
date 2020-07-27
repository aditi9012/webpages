const getUserChoice= userInput =>{
userInput = userInput.toLowerCase();
if(userInput==='rock'){
return userInput;
}
else if(userInput==='paper'){
return userInput;
}
else if(userInput==='scissors'){
return userInput;
}
else{
  console.log('Error!');
}
};
console.log(getUserChoice('Paper'));
console.log(getUserChoice('Fork'));
function getComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
    return 'rock';
    break;
    case 1 :
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice)
{ if(userChoice===computerChoice){
   return 'The game is a tie!!!';
   }
   if(userChoice==='rock'){
     if(computerChoice==='paper'){
       return 'computer won !!!';
     }
     if(computerChoice==='scissors'){
       return'user wins !!!';
     }
   }
   if(userChoice==='paper')
   {
     if(computerChoice==='rock'){
       return'user wins !!!' ;
     }
     if(computerChoice==='scissors')
     {
       return 'computer wins !!!';
     }
   }
}
console.log(determineWinner('paper','scissors'));
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
const playGame =() =>{
  const userChoice=getUserChoice('scissors');
  const computerChoice=getComputerChoice();
  console.log('You threw:' + userChoice);
  console.log('The computer threw:' + computerChoice);
  var a=userChoice;
  var b=computerChoice;
    console.log(determineWinner(a,b));
};
playGame();