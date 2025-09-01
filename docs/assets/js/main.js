// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    setupThemeToggle();
});

function initializeNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('.main-nav');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}
