const submitBtn = document.getElementById('submit');
    const inputForm = document.getElementById('input-form');
    const board = document.getElementById('board');
    const cells = document.getElementsByClassName('cell');
    const messageDiv = document.getElementById('message');
    const title = document.getElementById('title');

    let player1 = "", player2 = "";
    const playerSymbol = ["x", "o"];
    let currentPlayer = "";
    let currentSymbol = "";

    const winning_combinations = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]
    ];

    submitBtn.addEventListener('click', () => {
      player1 = document.getElementById('player1').value.trim();
      player2 = document.getElementById('player2').value.trim();

      if (!player1 || !player2) {
        alert("Please enter names for both players.");
        return;
      }

      currentPlayer = player1;
      currentSymbol = playerSymbol[0];

      // Hide form, show game
      inputForm.classList.add('hidden');
      board.classList.remove('hidden');
      messageDiv.classList.remove('hidden');
      title.classList.remove('hidden');

      messageDiv.textContent = `${currentPlayer}, you're up`;

      for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].addEventListener('click', handleCellClick, { once: true });
      }
    });

    function handleCellClick(e) {
      const cell = e.target;
      if (cell.textContent !== "") return;

      cell.textContent = currentSymbol;

      if (checkWin()) {
        messageDiv.textContent = `${currentPlayer} congratulations you won!`;
        disableBoard();
        return;
      }

      if (checkTie()) {
        messageDiv.textContent = `Game tie`;
        return;
      }

      // Switch turn
      if (currentPlayer === player1) {
        currentPlayer = player2;
        currentSymbol = playerSymbol[1];
      } else {
        currentPlayer = player1;
        currentSymbol = playerSymbol[0];
      }

      messageDiv.textContent = `${currentPlayer}, you're up`;
    }

    function checkWin() {
      for (const combo of winning_combinations) {
        const [a, b, c] = combo;
        if (
          cells[a].textContent === currentSymbol &&
          cells[b].textContent === currentSymbol &&
          cells[c].textContent === currentSymbol
        ) {
          return true;
        }
      }
      return false;
    }

    function checkTie() {
      for (let cell of cells) {
        if (cell.textContent === "") return false;
      }
      return true;
    }

    function disableBoard() {
      for (let cell of cells) {
        cell.removeEventListener('click', handleCellClick);
      }
    }