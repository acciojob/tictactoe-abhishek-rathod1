//your JS code here. If required.

const board = document.getElementById("board");
const cells = document.getElementsByClass("cell");
const player1 = document.getElementById("player-1").value;
const player2 = document.getElementById("player-2").value;
let currentPlayer = player1;
const playerSymbol = ["X", "O"];
let currentSymbol = playerSymbol[0];

const turnMessage = document.createElement("div");
turnMessage.textContent = `${currentPlayer}, you're up`;
board.after(turnMessage);

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i=0; i< cells.length; i++){
	cells[i].addEventlistner('click',()=>{
		if(cells[i].textContent !== ""){
			return
		}
		cells[i].textContent = currentSymbol;
		if(checkWin(currentPlayer)){
			turnMessage.textContent = `${currentPlayer}, congratulations you won!`
			return 
		}
		if(checkTie()){
			turnMessage.textContent = `Game tie`;
			return
		}
		currentPlayer = (currentPlayer === player1)? player2 : player1
		if(currentPlayer == player1){
			turnMessage.textContent = `${player1}, you're up`
		}else{
			turnMessage.textContent = `${player2}, you're up`
		}
	})
}

function checkWin(currentPlayer) {
	for (let i = 0; i < winning_combinations.length; i++) {
		const [a, b,c] = winning_combinations[i];
		if(cells[a].textContent)
	}
	
}

function startGame(){
	//hide player 1 player 2 and startgame button

	
	
}
