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

function getRandomLogo() {
    const randomIndex = Math.floor(Math.random() * logos.length);
    return logos[randomIndex];
}

function updateQuestion() {
    const randomLogo = getRandomLogo();
    console.log(randomLogo.name);
    console.log(randomLogo.src);
    document.getElementById("logo-image").src = randomLogo.src;
}

window.onload = function () {
    updateQuestion();
};