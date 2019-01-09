let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    console.log({now, then});

    countdown = setInterval(() => {
        const scondsLeft = Math.round((then - Date.now())/ 1000);
        // check if we sould stop it!
        if( scondsLeft <= 0 ){
            clearInterval(countdown);
            return;
        }
        //display it
        displayTimeLeft(scondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
const display = `${minutes}: ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
timerDisplay.textContent = display;

document.title = display;
    console.log();
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHour = hour> 12 ? hour -12 : hour;
    endTime.textContent = `BE Back At ${adjustedHour}:${minutes<10? '0':''}${minutes}`
}

function statTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
    // console.log(seconds);
}

buttons.forEach( button => button.addEventListener('click', statTimer));
document.customForm.addEventListener('submit', function(e) {
     e.preventDefault();
    const mins = this.minutes.value;
   timer(mins * 60);
    this.reset();
} )