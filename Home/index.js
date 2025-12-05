// Script moved from index.html
const textElement = document.getElementById('changingText');
const languages = ["MadX", "मैड-एक्स", "میڈ ایکس", "மேட்எக்ஸ்"];
let currentIndex = 0;

setInterval(function() {
    currentIndex++;
    if (currentIndex >= languages.length) {
        currentIndex = 0;
    }
    if (textElement) textElement.innerText = languages[currentIndex];
}, 2000);
