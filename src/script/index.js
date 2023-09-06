var tabuleiro;
var board;
var aviso;
var jogador;
let flag;

function inicia() {
  jogador = 1;
  tabuleiro = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  aviso = document.getElementById("aviso");
  flag = true;
}

const restart = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById(`cell${i}${j}`).innerHTML = " ";
    }
  }
  aviso.innerHTML = "";
  inicia();
};

function jogar(x, y) {
  if (flag) {
    aviso.innerHTML = "Vez do jogador: " + ((jogador % 2) + 1);

    const cellId = `cell${x}${y}`;
    const cell = document.getElementById(cellId);

    if (cell.textContent == 0) {
      const simbolo = jogador % 2 === 0 ? "X" : "O";
      cell.innerHTML = simbolo;
      cell.style.color = simbolo === "X" ? "#fff" : "#000";
      tabuleiro[x][y] = simbolo === "X" ? 1 : -1;
    } else {
      aviso.innerHTML = "Campo ja foi marcado!";
      jogador--;
    }
    jogador++;

    checa();
  }
}

function checa() {
  var soma;

  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML =
        "Jogador " +
        ((jogador % 2) + 1) +
        " ganhou! Linha " +
        (i + 1) +
        " preenchida!";

      flag = false;
    }
  }

  //Colunas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

    if (soma == 3 || soma == -3) {
      aviso.innerHTML =
        "Jogador " +
        ((jogador % 2) + 1) +
        " ganhou! Coluna " +
        (i + 1) +
        " preenchida!";
      flag = false;
    }
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
  if (soma == 3 || soma == -3) {
    aviso.innerHTML =
      "Jogador " + ((jogador % 2) + 1) + " ganhou! Diagonal preenchida!";
    flag = false;
  }

  //Diagonal
  soma = 0;
  soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
  if (soma == 3 || soma == -3) {
    aviso.innerHTML =
      "Jogador " + ((jogador % 2) + 1) + " ganhou! Diagonal preenchida!";
    flag = false;
  }
}
