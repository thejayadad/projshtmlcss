const changeColorButton = document.getElementById("change-color");
const resetColorButton = document.getElementById("reset-color");
const colorCodeDisplay = document.getElementById("color-code"); // Get the color code display element

changeColorButton.addEventListener("click", function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorCodeDisplay.innerText = randomColor; // Update displayed color code
});

resetColorButton.addEventListener("click", function() {
    const originalColor = '#f0f8ff';
    document.body.style.backgroundColor = originalColor; // Original color
    colorCodeDisplay.innerText = originalColor; // Update displayed color code
});
