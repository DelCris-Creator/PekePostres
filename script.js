// Crear corazones flotantes
const heartContainer = document.createElement('div');
heartContainer.classList.add('heart-container');
document.body.appendChild(heartContainer);

for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heartContainer.appendChild(heart);
}

//document.getElementById('mi-imagen').style.filter = 'brightness(0) invert(1) hue-rotate(90deg)';