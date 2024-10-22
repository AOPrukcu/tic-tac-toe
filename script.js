let Player(name) {
  this.name = name;
  this.playerSymbol = ""
  this.winStreak = 0;
  

  put = function (choosenIndex) {
    if (this.board[choosenIndex] === "undefined") {
        this.board[choosenIndex] = this.playerSymbol 
    }
  };
}

let gameBoard = {
  board: [9],
  turn: true ,
  currentPlayer : true,
  addTurn : ()=>++this.turn,
  changeTurn : function () {
    turn = !turn
  };
};

function playGame(player1, player2) {
  rand = Math.random() * 10 ;
  if(rand > 5) {
    player1.playerSymbol= "o";
    player2.playerSymbol= "x";
   
  }else {
    player1.playerSymbol= "x";
    player2.playerSymbol= "o";
  }
   ;
  for (let index = 0; index < 9; index++) {
    
    
  }
}
squares = document.querySelectorAll(".square");
squares.forEach((element) => {
  element.addEventListener("click", (player) =>{
    if(element.textContent==""){
        let index = (+element.id ) - 1
    player.put(index);
    element.textContent = player.playerSymbol   
    }
    board.addTurn()
    checkWinner(board);
    
    
} 
  );
});


function checkWinner(board) {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}
