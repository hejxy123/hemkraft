// dropdawn nav manue 
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
});






// review cystmer lsif in on scroll
    document.addEventListener("DOMContentLoaded", function() {
        const reviewCards = document.querySelectorAll('.review-card');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add the visible class when in view
                    observer.unobserve(entry.target); // Stop observing once the card is visible
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

        reviewCards.forEach(card => {
            observer.observe(card); // Observe each review card
        });
    });











document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hidden');

    const showSection = (section) => {
        section.classList.remove('hidden');
        section.classList.add('visible');
    };

    const checkScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                showSection(section);
            }
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load as well
});
