
function abrirLightbox(src) {
    document.getElementById('imagen-lightbox').src = src;
    document.getElementById('lightbox').style.display = 'block';
}

function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
