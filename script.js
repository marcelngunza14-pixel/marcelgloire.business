// Simple script for e-commerce functionality
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent === 'Ajouter au panier') {
            button.addEventListener('click', function() {
                alert('Produit ajouté au panier !');
            });
        }
    });
});