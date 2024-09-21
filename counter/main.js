let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment-button");
const resetButton = document.getElementById("reset-button");

incrementButton.addEventListener("click", function() {
    count++;
    counterDisplay.innerText = count;
});

resetButton.addEventListener("click", function() {
    count = 0;
    counterDisplay.innerText = count;
});
