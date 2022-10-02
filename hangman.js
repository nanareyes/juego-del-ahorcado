let screen = document.querySelector("canvas");
let btnNewGame = (document.getElementById("btn-new-game").style.display =
  "none");
let btnHide = (document.getElementById("btn-logout").style.display = "none");
let divAddWord = (document.getElementById("add-word").style.display = "none");
btnNewGame = document.getElementById("btn-new-game");
let btnLogout = document.getElementById("btn-logout");
let btnCancel = document.getElementById("btn-cancel");

let words = [
  "ALURA",
  "AHORCADO",
  "HTML",
  "ORACLE",
  "JAVASCRIPT",
  "LOGICA",
  "PROGRAMACION",
  "DESAFIO",
];
let page = document.getElementById("gallow");
let board = page.getContext("2d");
let secretword = "";
let letters = [];
let rigthWord = "";
let error = 8;
let wrongLetters = [];
let totalErrors = 8;
let selectedLetter = [];

document.getElementById("start-game").onclick = () => {
  startGame();
};
document.getElementById("btn-save").onclick = () => {
  saveWord();
};
btnNewGame.addEventListener("click", function () {
  startGame()
  window.location.reload()

});
btnLogout.addEventListener("click", function () {
  location.reload();
});
btnCancel.addEventListener("click", function () {
  location.reload();
});
function chooseSecretWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  secretword = word;
  return word;
}
function verifyLetter(key) {
  if (letters.length < 1 || letters.indexOf(key) < 0) {
    letters.push(key);
    return false;
  } else {
    letters.push(key);
    return true;
  }
}

function addLetterRigth(i) {
  rigthWord += secretword[i].toUpperCase();
}

function addLetterWrong(letter) {
  if (secretword.indexOf(letter) <= 0) {
    error -= 1;
  }
}

function verifyGameOver(letter) {
  if (selectedLetter.length < secretword.length) {
    wrongLetters.push(letter);

    if (wrongLetters.length > totalErrors) {
      loose();
    } else if (selectedLetter.length < secretword.length) {
      addLetterWrong(letter);
      showRigthLetter(letter, error);
    }
  }
}

function verifyWinner(letter) {
  selectedLetter.push(letter.toUpperCase());
  if (selectedLetter.length == secretword.length) {
    win();
  }
}

function verifyLetters(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}
function showScreenToAddWord() {
  document.getElementById("div-hide").style.display = "none";
  document.getElementById("add-word").style.display = "flex";
}

function saveWord() {
  let newWord = document.getElementById("input-new-word").value;

  if (newWord !== "") {
    words.push(newWord.toUpperCase());
    alert("Palabra añadida correctamente");

    document.getElementById("add-word").style.display = "none";
    startGame();
  } else {
    alert("Ninguna palabra ha sido ingresada");
  }
}

function startGame() {
  document.getElementById("div-hide").style.display = "none";
  drawBoard();
  chooseSecretWord();
  drawLines();

  document.getElementById("btn-new-game").style.display = "block";
  document.getElementById("btn-logout").style.display = "block";
  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    if (wrongLetters.length <= totalErrors) {
      if (!verifyLetter(e.key) && verifyLetters(e.keyCode)) {
        if (secretword.includes(letter)) {
          addLetterRigth(secretword.indexOf(letter));
          for (let i = 0; i < secretword.length; i++) {
            if (secretword[i] === letter) {
              writeRigthLetter(i);
              verifyWinner(letter);
            }
          }
        } else {
          if (!verifyLetter(e.key) && !verifyWinner(letter)) return;
          drawHangman(error);
          verifyGameOver(letter);
        }
      }
    } else {
      alert("Has superado el limite de letras incorrectas");
    }
  };
}
