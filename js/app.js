
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/
 const winningCombos = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]
];



/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.querySelector('#message');


/*-------------------------------- Functions --------------------------------*/
function render(){
    updateBoard();
    updateMessage()  

}
function updateBoard() {
    board.forEach((cell, idx)=> {
        squareEls[idx].textContent = cell;
    });
}

function updateMessage(){
    if (!winner && !tie){
    messageEl.textContent = `It's ${turn}'s turn!`;    
    } else if (!winner && tie) {
      messageEl.textContent ="It's a tie!";
    } else {
       messageEl.textContent = `Congrats ${turn}! You win!`;  
    }
}


function init() {
    console.log("init function called");

    board =['', '', '', '', '', '','','','']
    turn = 'X';
    winner = false;
    tie = false;

    render();
}


/*----------------------------- Event Listeners -----------------------------*/

init();



console.log(squareEls);
console.log(messageEl);
