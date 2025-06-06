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

// carrusel
document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel-inner');
    const items = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Crear indicadores si hay más de 1 item
    if(totalItems > 1) {
        const indicadoresContainer = document.createElement('div');
        indicadoresContainer.className = 'carrusel-indicadores';
        
        for(let i = 0; i < totalItems; i++) {
            const indicador = document.createElement('div');
            indicador.className = 'carrusel-indicador';
            if(i === 0) indicador.classList.add('active');
            indicador.addEventListener('click', () => {
                currentIndex = i;
                updateCarrusel();
            });
            indicadoresContainer.appendChild(indicador);
        }
        
        document.querySelector('.destacados-semana').appendChild(indicadoresContainer);
    }

    function updateCarrusel() {
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores activos
        document.querySelectorAll('.carrusel-indicador').forEach((ind, index) => {
            ind.classList.toggle('active', index === currentIndex);
        });
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarrusel();
        });

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarrusel();
        });
    }

    // Carrusel automático (opcional)
    let intervalo = setInterval(function() {
        if(totalItems > 1) {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarrusel();
        }
    }, 5000);

    // Pausar al hacer hover
    document.querySelector('.carrusel').addEventListener('mouseenter', () => {
        clearInterval(intervalo);
    });

    document.querySelector('.carrusel').addEventListener('mouseleave', () => {
        intervalo = setInterval(function() {
            if(totalItems > 1) {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarrusel();
            }
        }, 5000);
    });
});

//Fin Carrusel