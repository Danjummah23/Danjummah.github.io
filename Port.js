const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
window.onload = (function() {
console.log('test')

const hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements)
hiddenElements.forEach((el) => observer.observe(el));

})



const container = document.querySelector('.container');
const languages = [
    "I am Udemy certified!!",
    "Je suis certifié Udemy!!",
    "Ni ne Udemy bokan!!"
];

let languageIndex = 0;
let charIndex = 0;

function writeText() {
    const language = languages[languageIndex];
    container.innerText = language.slice(0, charIndex);
    charIndex++;

    if (charIndex > language.length) {
        charIndex = 0;
        languageIndex++;
        if (languageIndex >= languages.length) {
            languageIndex = 0;
        }
    }
}

setInterval(writeText, 100);


// Get references to the language buttons
const englishButton = document.getElementById('english');
const frenchButton = document.getElementById('french');
const hausaButton = document.getElementById('hausa');
const norwegianButton = document.getElementById('norwegian');

// Define the language codes for the different languages
const englishCode = 'en';
const frenchCode = 'fr';
const hausaCode = 'ha';
const norwegianCode = 'no';

// Add event listeners to the language buttons
englishButton.addEventListener('click', function() {
  // Set the language attribute of the html tag to English
  document.documentElement.lang = englishCode;
});

frenchButton.addEventListener('click', function() {
  // Set the language attribute of the html tag to French
  document.documentElement.lang = frenchCode;
});

hausaButton.addEventListener('click', function() {
  // Set the language attribute of the html tag to Hausa
  document.documentElement.lang = hausaCode;
});

norwegianButton.addEventListener('click', function() {
  // Set the language attribute of the html tag to Norwegian
  document.documentElement.lang = norwegianCode;
});
