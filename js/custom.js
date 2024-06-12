//** Código para el header fijo **//
// Obtén el encabezado
let header = document.querySelector('.site-header');

// Guarda la posición actual de desplazamiento de la página
let scrollPosition = window.scrollY;

// Escucha el evento de desplazamiento de la página
window.addEventListener('scroll', function() {
    // Obtén la nueva posición de desplazamiento
    let newScrollPosition = window.scrollY;

    // Compara las posiciones para determinar la dirección del desplazamiento
    if (newScrollPosition > scrollPosition) {
        // Si la nueva posición es mayor, oculta el encabezado
        header.classList.add('hidden');
    } else {
        // Si la nueva posición es menor, muestra el encabezado
        header.classList.remove('hidden');
    }

    // Actualiza la posición de desplazamiento actual
    scrollPosition = newScrollPosition;
});