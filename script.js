// script.js

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Clickable buttons for external links
document.querySelectorAll('section#kontakt button').forEach(button => {
    button.addEventListener('click', function(e) {
        const link = this.querySelector('a');
        if (link && link.href) {
            window.open(link.href, '_blank');
        }
        e.preventDefault();
    });
});

// Fix: If button contains focus, show outline
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('focus', () => {
        btn.style.outline = '2px solid #2074d4';
    });
    btn.addEventListener('blur', () => {
        btn.style.outline = '';
    });
});