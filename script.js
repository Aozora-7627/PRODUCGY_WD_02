let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let lapCount = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const leftReel = document.getElementById('leftReel');
const rightReel = document.getElementById('rightReel');
const lapsList = document.getElementById('lapsList');

function formatTime(ms) {
  const hrs = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  const centis = Math.floor((ms % 1000) / 10);

  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
  lapBtn.disabled = false;

  leftReel.classList.add('spinning');
  rightReel.classList.add('spinning');
}

function pauseTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  lapBtn.disabled = true;

  leftReel.classList.remove('spinning');
  rightReel.classList.remove('spinning');
}

function resetTimer() {
  pauseTimer();
  elapsedTime = 0;
  lapCount = 0;
  display.textContent = "00:00:00.00";
  lapsList.innerHTML = "";
  pauseBtn.disabled = true;
  lapBtn.disabled = true;
}

function recordLap() {
  lapCount++;
  const li = document.createElement('li');
  li.innerHTML = `<span>Lap ${lapCount}</span> <span>${formatTime(elapsedTime)}</span>`;
  lapsList.prepend(li);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);