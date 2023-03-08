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