function displayData() {
    let userName = document.getElementById('name').value;
    let color = document.getElementById('color').value;

    if (userName.length === 0) {
        alert("Le nom doit contenir au moins un caractère.");
        return;
    }
    if (color.length === 0) {
        alert("La couleur doit contenir au moins un caractère.");
        return;
    }
        //console.log("Name: " + userName);
        //console.log("Favorite Color: " + color);
        document.getElementById('outputName').textContent = "Name: " + userName;
        document.getElementById('outputColor').textContent = "Favorite Color: " + color;
}