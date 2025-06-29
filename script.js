// Crear juguetes flotantes con más variedad y animaciones
const toyContainer = document.createElement('div');
toyContainer.classList.add('toy-container');
document.body.appendChild(toyContainer);

// Array ampliado de emojis infantiles
const kidEmojis = ['🧸', '🚀', '🎈', '🎨', '⚽', '🎮', '🦄', '🐶', '🍭', '🎯', '🪀', '🎲', '🎠', '🤡', '🌈', '🎪', '🎁', '🍬', '🎹', '🎸'];

// Colores vibrantes para los juguetes
const toyColors = ['#FF5252', '#FFEB3B', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800', '#00BCD4', '#E91E63', '#8BC34A', '#FFC107'];

for (let i = 0; i < 15; i++) { // Aumentamos a 15 juguetes
    const toy = document.createElement('div');
    toy.classList.add('toy');
    const randomEmoji = kidEmojis[Math.floor(Math.random() * kidEmojis.length)];
    toy.innerHTML = randomEmoji;
    
    // Estilos aleatorios para más diversión
    toy.style.fontSize = `${Math.random() * 20 + 20}px`; // Tamaño entre 20-40px
    toy.style.color = toyColors[Math.floor(Math.random() * toyColors.length)];
    toy.style.animationDuration = `${Math.random() * 10 + 5}s`; // Velocidad variable
    toy.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    
    // Añadir animación de balanceo adicional
    toy.style.animation = `floatToy ${Math.random() * 10 + 5}s linear infinite, swing ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
    
    toyContainer.appendChild(toy);
}

// Animación de balanceo para los juguetes
const style = document.createElement('style');
style.textContent = `
    @keyframes swing {
        0% { transform: rotate(-10deg); }
        100% { transform: rotate(10deg); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Carrusel con efectos mejorados
document.addEventListener('DOMContentLoaded', function() {
    // Selección de elementos
    const carrusel = document.querySelector('.carrusel-inner');
    const items = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.querySelector('.carrusel-control.prev');
    const nextBtn = document.querySelector('.carrusel-control.next');
    let currentIndex = 0;
    const totalItems = items.length;
    let intervalo;

    // Función para actualizar el carrusel
    function updateCarrusel(direction = null) {
        // Efecto de transición
        carrusel.style.transition = 'transform 0.5s ease';
        
        // Actualizar posición
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores
        updateIndicadores();
        
        // Reiniciar autoplay
        resetAutoplay();
        
        // Efecto de confeti (opcional)
        if (direction) createConfetti(10);
    }

    function updateIndicadores() {
        document.querySelectorAll('.carrusel-indicador').forEach((ind, index) => {
            ind.classList.toggle('active', index === currentIndex);
        });
    }

    function resetAutoplay() {
        clearInterval(intervalo);
        startAutoplay();
    }

    function startAutoplay() {
        if (totalItems > 1) {
            intervalo = setInterval(() => {
                navigate(1); // Siguiente
            }, 5000);
        }
    }

    function navigate(direction) {
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        updateCarrusel(direction);
    }

    // Event listeners para flechas
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigate(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigate(1));
    }

    // Inicialización
    function initCarrusel() {
        // Crear indicadores si hay más de 1 item
        if (totalItems > 1) {
            const indicadoresContainer = document.createElement('div');
            indicadoresContainer.className = 'carrusel-indicadores';
            
            for (let i = 0; i < totalItems; i++) {
                const indicador = document.createElement('div');
                indicador.className = 'carrusel-indicador';
                if (i === 0) indicador.classList.add('active');
                indicador.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarrusel();
                });
                indicadoresContainer.appendChild(indicador);
            }
            
            document.querySelector('.carrusel').appendChild(indicadoresContainer);
        }
        
        startAutoplay();
    }

    // Pausar al hacer hover
    const carruselElement = document.querySelector('.carrusel');
    if (carruselElement) {
        carruselElement.addEventListener('mouseenter', () => clearInterval(intervalo));
        carruselElement.addEventListener('mouseleave', startAutoplay);
    }

    // Inicializar
    initCarrusel();
});

// Efecto especial para el título del Día del Niño
document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('header h1');
    if(titulo) {
        titulo.addEventListener('mouseover', function() {
            this.style.animation = 'rainbow 1.5s infinite';
            createConfetti();
        });
        
        titulo.addEventListener('mouseout', function() {
            this.style.animation = '';
        });
        
        // Efecto al hacer clic
        titulo.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
            createConfetti(30);
        });
    }
});

// Función para crear confeti (efecto de celebración)
function createConfetti(count = 20) {
    const colors = ['#FF5252', '#FFEB3B', '#4CAF50', '#2196F3', '#9C27B0'];
    
    for(let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Posición aleatoria en la pantalla
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `-10px`;
        
        // Color aleatorio
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Tamaño y forma aleatorios
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        // Animación con parámetros aleatorios
        const duration = Math.random() * 3 + 2;
        confetti.style.animation = `fall ${duration}s linear forwards`;
        
        // Rotación aleatoria
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(confetti);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Efecto en los productos al hacer hover
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 8px 16px rgba(255, 87, 34, 0.3)';
            this.style.transform = 'scale(1.05) rotate(2deg)';
            
            // Efecto de rebote en la imagen
            const img = this.querySelector('img');
            if(img) {
                img.style.transform = 'translateY(-5px)';
                img.style.transition = 'transform 0.3s ease';
            }
        });
        
        product.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'scale(1) rotate(0)';
            
            const img = this.querySelector('img');
            if(img) {
                img.style.transform = 'translateY(0)';
            }
        });
        
        // Efecto al hacer clic
        product.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05) rotate(2deg)';
            }, 200);
            
            createConfetti(15);
        });
    });
});

// Efecto especial para el botón de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-button');
    if(whatsappBtn) {
        // Animación de latido
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
        
        whatsappBtn.addEventListener('click', function() {
            createConfetti(30);
        });
    }
});