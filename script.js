// Crear corbatas flotantes
const tieContainer = document.createElement('div');
tieContainer.classList.add('tie-container');
document.body.appendChild(tieContainer);

for (let i = 0; i < 10; i++) {
    const tie = document.createElement('div');
    tie.classList.add('tie');
    tie.innerHTML = '👔'; // Símbolo de corbata en lugar de corazón
    tieContainer.appendChild(tie);
}

//document.getElementById('mi-imagen').style.filter = 'brightness(0) invert(1) hue-rotate(90deg)';