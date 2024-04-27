const timeElement = document.querySelector('.time');
const startButton = document.querySelector('.btn-start');

let time = 60;
let intervalId;

startButton.addEventListener('click', startTimer);

function startTimer() {
    clearInterval(intervalId);
    timeElement.textContent = time;

    intervalId = setInterval(() => {
        time--;
        timeElement.textContent = time;

        if (time === 0) {
            clearInterval(intervalId);
            timeElement.classList.add('pulse');
        }
    }, 1000);
}
