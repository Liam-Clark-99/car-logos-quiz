const logos = [
    { src: "/assets/images/audi-logo.jpg", name: "Audi" },
    { src: "/assets/images/bentley-logo.jpg", name: "Bentley" },
    { src: "/assets/images/chevrolet-logo.jpg", name: "Chevrolet" },
    { src: "/assets/images/citroen-logo.jpg", name: "Citroen" },
    { src: "/assets/images/dodge-logo.jpg", name: "Dodge" },
    { src: "/assets/images/ferrari-logo.jpg", name: "Ferrari" },
    { src: "/assets/images/lexus-logo.jpg", name: "Lexus" },
    { src: "/assets/images/mercedes-logo.jpg", name: "Mercedes" },
    { src: "/assets/images/peugeot-logo.jpg", name: "Peugeot" },
    { src: "/assets/images/toyota-logo.jpg", name: "Toyota" }
];

const answerButtons = document.querySelectorAll('.answer-button');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateQuestion() {
    const shuffledLogos = shuffleArray(logos);
    const randomLogo = shuffledLogos[0]; // Take the first logo from the shuffled array
    console.log(randomLogo.name);
    console.log(randomLogo.src);
    document.getElementById("logo-image").src = randomLogo.src;

    // Populate answer buttons
    shuffledLogos.forEach((logo, index) => {
        answerButtons[index].textContent = logo.name;

        // Set the correct answer
        if (index === 0) {
            answerButtons[index].dataset.correct = 'true';
        } else {
            answerButtons[index].dataset.correct = 'false';
        }

        // Add event listener for answer button click
        answerButtons[index].addEventListener('click', selectAnswer);
    });
}

window.onload = function () {
    updateQuestion();
};

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === 'true';

    if (correct) {
        // Handle correct answer logic (e.g., increase score, display feedback)
        console.log('Correct answer!');
    } else {
        // Handle incorrect answer logic (e.g., display feedback)
        console.log('Incorrect answer. Try again.');
    }

    // After handling the answer, update the question for the next round
    updateQuestion();
}
