function updateQuestion() {
    const randomLogo = getRandomLogo();
    console.log(randomLogo.name);
    console.log(randomLogo.src);
    document.getElementById("logo-image").src = randomLogo.src;
}
