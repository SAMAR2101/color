// Attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur hexadécimale aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajoute un écouteur d'événement au bouton pour changer la couleur de la boîte
    changeColorBtn.addEventListener('click', function () {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});