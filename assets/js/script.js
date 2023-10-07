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

let correctScore = 0;
let incorrectScore = 0;
const answerButtons = document.querySelectorAll('.answer-button');

function updateQuestion() {
    const shuffledLogos = logos.sort(() => Math.random() - 0.5);
    const correctAnswerIndex = Math.floor(Math.random() * 4);

    answerButtons.forEach((button, index) => {
        button.textContent = shuffledLogos[index].name;
        button.dataset.correct = (index === correctAnswerIndex).toString();
        button.addEventListener('click', selectAnswer);
    });

    document.getElementById("logo-image").src = shuffledLogos[correctAnswerIndex].src;
}

function updateScore(correct) {
    if (correct) {
        correctScore++;
    } else {
        incorrectScore++;
    }

    document.getElementById("correct-score").textContent = correctScore;
    document.getElementById("incorrect-score").textContent = incorrectScore;
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === 'true';

    if (correct) {
        console.log('Correct answer!');
    } else {
        console.log('Incorrect answer. Try again.');
    }

    updateScore(correct);
    updateQuestion();
}

window.onload = function () {
    if (answerButtons.length !== 4) {
        console.error('Invalid number of answer buttons found:', answerButtons.length);
    } else {
        answerButtons.forEach(button => {
            button.addEventListener('click', selectAnswer);
        });
        updateQuestion();
    }
};
