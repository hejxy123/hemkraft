// dropdawn nav manue 
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
});








// servoces  slider 
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Remove active class
        slides[i].style.display = "none"; // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the current slide with active class
    slides[slideIndex - 1].style.display = "flex"; // Make it flex to apply opacity
    slides[slideIndex - 1].classList.add("active"); // Add active class for fade-in

    // Remove active class from dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active"; // Highlight the current dot

    // Wait for the display change to take effect before transitioning
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1"; // Fade-in effect
    }, 50); // Small delay to ensure the display is set to 'flex'

    // Reset opacity for the next slide after a delay
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "0"; // Fade-out effect
    }, 4000); // Keep it visible for a few seconds before fading out

    setTimeout(showSlides, 5000); // Change every 5 seconds
}




 // FOOTER CONTECT APEARING 
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








// Q&A DROPDAWN

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
    // Toggle visibility of answer
    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.classList.remove('fa-chevron-up'); // Remove up arrow
        arrow.classList.add('fa-chevron-down');  // Add down arrow
    } else {
        answer.style.display = "block";
        arrow.classList.remove('fa-chevron-down'); // Remove down arrow
        arrow.classList.add('fa-chevron-up');      // Add up arrow
    }
}