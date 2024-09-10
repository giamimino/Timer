// Timer Variables
let seconds = 60;
let timerInterval;
const secondDisplay = document.getElementById('second');
const startButton = document.getElementById('start');
const circleForeground = document.querySelector('.circle-foreground');

// Function to Start Timer
function startTimer() {
    // Prevent multiple intervals from being set
    if (timerInterval) return;

    let remainingTime = seconds;
    const totalDashArray = 628;

    // Update the display every second
    timerInterval = setInterval(() => {
        remainingTime--;
        secondDisplay.textContent = remainingTime.toString().padStart(2, '0');

        // Update the stroke-dashoffset to create the circular animation
        const dashOffset = (remainingTime / seconds) * totalDashArray;
        circleForeground.style.strokeDashoffset = dashOffset;

        // When time is up, clear the interval
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerInterval = null; // Reset timer
        }
    }, 1000);
}

// Event Listener for Start Button
startButton.addEventListener('click', startTimer);
