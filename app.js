const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setMark = (index, mark) => {
        if (board[index] === "") {
            board[index] = mark;
        }
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setMark, resetBoard };
})();

const Player = (name, mark) => {
    return { name, mark };
};


const createGameboard = () => {
    const gameboard = document.getElementById("gameboard");
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell"); 
        gameboard.appendChild(cell);
    }
};

createGameboard(); 

const GameController = (() => {
    let player1 = Player("Player 1", "X");
    let player2 = Player("Player 2", "O");
    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const getCurrentPlayer = () => currentPlayer;

    const playRound = (index) => {
        if (Gameboard.getBoard()[index] === "") {
            Gameboard.setMark(index, currentPlayer.mark);
            if (checkWin()) {
                console.log(`${currentPlayer.name} wins!`);
                Gameboard.resetBoard();
            } else if (isDraw()) {
                console.log("It's a draw!");
                Gameboard.resetBoard();
            } else {
                switchPlayer();
            }
        }
    };

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winConditions.some(condition => {
            const [a, b, c] = condition;
            return Gameboard.getBoard()[a] &&
                Gameboard.getBoard()[a] === Gameboard.getBoard()[b] &&
                Gameboard.getBoard()[a] === Gameboard.getBoard()[c];
        });
    };

    const isDraw = () => {
        return Gameboard.getBoard().every(cell => cell !== "");
    };

    return { playRound, getCurrentPlayer };
})();

const DisplayController = (() => {
    const cells = document.querySelectorAll("#gameboard div");

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            GameController.playRound(index);
            updateBoard();
        });
    });

    const updateBoard = () => {
        const board = Gameboard.getBoard();
        cells.forEach((cell, index) => {
            cell.textContent = board[index];
        });
    };

    return { updateBoard };
})();


