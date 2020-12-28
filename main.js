// 定数定義

const myNumberInput = document.getElementById("js_myNumber");
const button = document.getElementById("js_button");
const lastNumber = document.getElementById("last-number");
const resultText = document.getElementById("result-text");
const adviceText = document.getElementById("advice-text");
const replayButton = document.getElementById("js_replay");

// 変数定義

let randomNumber = Math.floor(Math.random() * 99 + 1);
let tryCounter = 0;
let lastNumberArray = [];

// 関数定義

const checkNumber = () => {
  const myNumber = myNumberInput.value;
  lastNumberArray.push(myNumber);
  lastNumber.textContent = `前回の予想：${lastNumberArray.join(" ")}`;
  resultText.textContent = "";
  adviceText.textContent = "";

  if (randomNumber === +myNumber) {
    resultText.textContent = "おめでとう！正解です！！";
    adviceText.textContent = "";
    replayButton.classList.toggle("none");
    button.disabled = true;
  } else {
    resultText.textContent = "間違いです！！";
    tryCounter++;
    if (randomNumber < myNumber) {
      adviceText.textContent = "今の予想は大きすぎです!もっと小さな数字です。";
    } else if(randomNumber > myNumber) {
      adviceText.textContent = "今の予想は小さすぎです!もっと大きな数字です。";
    } else {
        adviceText.textContent = "半角数字を入力してください！！";
    }
  }
  if (tryCounter === 10) {
    resultText.textContent = "ゲームオーバー";
    adviceText.textContent = "";
    replayButton.classList.toggle("none");
    button.disabled = true;
  }
  myNumberInput.value = "";
};

const replayGame = () => {
  randomNumber = Math.floor(Math.random() * 99 + 1);
  tryCounter = 0;
  lastNumberArray = [];
  button.disabled = false;
  resultText.textContent = "";
  adviceText.textContent = "";
  lastNumber.textContent = "";
  replayButton.classList.toggle("none");
};

// イベント設定

button.addEventListener("click", checkNumber);
replayButton.addEventListener("click", replayGame);
