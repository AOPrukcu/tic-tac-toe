function Player(name,){
    this.name = name;
    this.turn = false;
    
    this.changeTurn = function(){
        this.turn = !this.turn
    }

 
    put = function(choosenIndex){
        if(this.board[choosenIndex] ==="undefined"){
            (this.turn ==true) ?
            this.board[choosenIndex] =gameBoard.o :  this.board[choosenIndex] =gameBoard.x;
        }
       
    }
   
}


let gameBoard = {
    board:[9],
    x : "x",
    o :"o",
    
    
    
}

function playGame(player1,player2){
    rand = Math.random() *10
    (rand > 5)? player1.changeTurn() : player2.changeTurn(); 
    let gameOn = true;
    while(gameOn){
        if(player1.turn ==true){

        }
    }

}
squares = document.querySelectorAll(".square")
squares.forEach(element => {
    element.addEventListener("click",(player) =>
    player.put(+element.id))
    
});
function playBoard(player){
    player.
}

function checkWinner(board) {
    const winCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]  
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; 
        }
    }

    return null;
}

const board = ['x', 'o', 'x', 'x', 'x', 'o', 'o', 'x', 'x'];
const winner = checkWinner(board);

if (winner) {
    console.log(`Kazanan: ${winner}`);
} else {
    console.log("Kazanan yok");
}
