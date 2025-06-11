document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');

    // Gestion du menu mobile
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Animation du bouton hamburger
        if (mobileMenu.classList.contains('active')) {
            hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            hamburgerLines.forEach(line => {
                line.style.transform = '';
                line.style.opacity = '';
            });
        }
    });

    // Fermer le menu quand on clique sur un lien
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburgerLines.forEach(line => {
                line.style.transform = '';
                line.style.opacity = '';
            });
        });
    });

    // Effet de scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
        }
    });
});