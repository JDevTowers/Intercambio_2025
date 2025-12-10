// Script para la lista de regalos
// Por ahora solo tiene funcionalidad básica, puedes agregar más features aquí

document.addEventListener('DOMContentLoaded', function() {
    console.log('Lista de Regalos cargada exitosamente! 🎁');
    
    // Aquí puedes agregar funcionalidades adicionales en el futuro
    // Por ejemplo: filtros, búsqueda, marcar regalos como comprados, etc.
});

// Función opcional para agregar interactividad a las tarjetas
function initCardInteractions() {
    const cards = document.querySelectorAll('.persona-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Aquí podrías agregar funcionalidad como mostrar detalles adicionales
            console.log('Tarjeta clickeada:', this.querySelector('.persona-nombre').textContent);
        });
    });
}

// Descomenta la siguiente línea si quieres activar las interacciones
// initCardInteractions();