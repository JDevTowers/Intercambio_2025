document.addEventListener('DOMContentLoaded', function() {
    console.log('Lista de Regalos cargada exitosamente!');
});

function initCardInteractions() {
    const cards = document.querySelectorAll('.persona-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log('Tarjeta clickeada:', this.querySelector('.persona-nombre').textContent);
        });
    });
}
