const addTen = document.querySelector("#add-ten");
const addTwenty = document.querySelector("#add-twenty");
const addThirty = document.querySelector("#add-thirty");
const addFive = document.querySelector("#add-five");
const timer = document.querySelector("#timer");
const beep = document.querySelector("#beep");
const buzz = document.querySelector("#buzz");
let time = 0;
let intervalId;

beep.volume = 0.3;
buzz.volume = 0.3;

function startTimer() {
    intervalId = setInterval(() => {
        if (time > 0) {
            time--;
        } else {
            clearInterval(intervalId);
            swapButtons();
        }
        playSound();
        setText(time);
    }, 1000);
}

function setText(currentTime) {
    if (time > 0) {
        timer.innerText = currentTime;
    } else {
        timer.innerText = "--";
    }
}

function playSound() {
    if(time <= 3 && time > 0) {
        beep.play();
    } else if (time === 0) {
        buzz.play();
    }
}

function plusFive() {
    clearInterval(intervalId);
    time += 5;
    setText(time);
    startTimer();
}

function swapButtons() {
    let buttons = document.querySelectorAll(".button");
    for (let btn of buttons) {
        btn.classList.toggle("invisible");
    }
    document.querySelector(".button-container").classList.toggle("centered");
}

addTen.addEventListener("click", () => {
    setTimer(10);
    swapButtons();
});

addTwenty.addEventListener("click", () => {
    setTimer(20);
    swapButtons();
});

addThirty.addEventListener("click", () => {
    setTimer(30);
    swapButtons();
});

addFive.addEventListener("click", () => {
    plusFive();
});

function setTimer(number) {
    time = number;
    setText(time);
    startTimer();
}