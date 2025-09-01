document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = card.getAttribute('data-category');
        alert(`${category} category - Coming next!`);
    });
});
