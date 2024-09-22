const changeColorButton = document.getElementById("change-color");
const resetColorButton = document.getElementById("reset-color");
const colorCodeDisplay = document.getElementById("color-code"); 

changeColorButton.addEventListener("click", function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorCodeDisplay.innerText = randomColor; 
});

resetColorButton.addEventListener("click", function() {
    const originalColor = '#f0f8ff';
    document.body.style.backgroundColor = originalColor; 
    colorCodeDisplay.innerText = originalColor; 
});
