const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");
const greeting = document.getElementById("greeting");
const timerDisplay = document.getElementById("timer");
const colorBox = document.getElementById("colorBox");
const finalMessage = document.getElementById("finalMessage");

const colors = ["teal", "purple", "darkorange", "seagreen", "royalblue", "crimson"];
let intervalId = null;

startBtn.addEventListener("click", function () {
  if (intervalId !== null) {
    return;
  }

  const userName = nameInput.value.trim().toUpperCase();

  greeting.textContent = "Hello " + (userName || "USER");

  let count = 5;
  timerDisplay.textContent = count;
  colorBox.textContent = count;
  colorBox.style.backgroundColor = colors[count];
  finalMessage.textContent = "";
  startBtn.disabled = true;

  intervalId = setInterval(function () {
    count--;
    timerDisplay.textContent = count;
    colorBox.textContent = count;
    colorBox.style.backgroundColor = colors[count];

    if (count === 0) {
      clearInterval(intervalId);
      intervalId = null;
      finalMessage.textContent = "Finished";
      startBtn.disabled = false;
    }
  }, 1000);
});