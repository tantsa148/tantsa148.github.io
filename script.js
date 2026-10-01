const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    // On ajoute/enlève la classe active au menu ET au bouton burger
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Optionnel : Fermer le menu quand on clique sur un lien
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("about-title").textContent = data.about.title;
        document.getElementById("about-description").textContent = data.about.description;
    })
    .catch(error => console.error(error));

const images = [
    "./Assets/about/1.jpg",
    "./Assets/about/2.jpg",
    "./Assets/about/3.jpg"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("aboutImage").src = images[index];
}, 800);