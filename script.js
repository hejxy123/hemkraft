// dropdawn nav manue 
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
});






// hero image slider 
const slides = document.getElementById('slides');
const preview = document.getElementById('next-preview');
const images = document.querySelectorAll('.slide img');
let currentIndex = 0;
const totalSlides = images.length;
const interval = 4000;

function showSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides / 2) { // Check if we're at the original slides
        slides.style.transition = 'none'; // Disable transition to jump back
        currentIndex = 0; // Reset to first set of slides
        slides.style.transform = `translateX(0)`; // Jump back to the start
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease'; // Re-enable transition
            slides.style.transform = `translateX(${-currentIndex * (400 + 20)}px)`; // Move to the next
        }, 20);
    } else {
        slides.style.transform = `translateX(${-currentIndex * (400 + 20)}px)`; // Move to the next
    }
    const nextIndex = (currentIndex + 1) % (totalSlides / 2); // Only get next image from the first set
    preview.innerHTML = `<img src="${images[nextIndex].src}" alt="Next Preview">`;
}

setInterval(showSlide, interval);




// survices section apear on scroll

document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll(".service");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAnimation() {
        services.forEach(service => {
            if (isElementInViewport(service)) {
                service.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkAnimation);
    window.addEventListener("load", checkAnimation);
});










// custmer review trastion aotomatic

let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const indicators = document.querySelectorAll('.indicator');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.opacity = 0;
        review.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    reviews[index].style.opacity = 1;
    reviews[index].classList.add('active');
    indicators[index].classList.add('active');
    currentReview = index;
}

// Auto switch reviews every 5 seconds
setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}, 5000);

// Always start with the first review visible
document.addEventListener("DOMContentLoaded", () => {
    showReview(0);  // Show the first review initially
});













// FORM AUTO SENT TO EMAIL
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const renovation = document.getElementById('renovation').value;

    // Get contact time and replace 'T' with a space
    const contactTime = document.getElementById('contactTime').value.replace('T', '  --   ');

    // Get project description
    const projectDescription = document.getElementById('projectDescription').value;

    // Send the form data using EmailJS
    emailjs.send('service_l2l3osb', 'template_rb705w8', {
      name: name,
      phone: phone,
      email: email,
      renovation: renovation,
      contact_time: contactTime, // Now formatted without 'T'
      project_description: projectDescription
    })
    .then(function(response) {
      // Display success message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = 'Message sent successfully!'; // Success message
      confirmationMessage.style.color = 'green'; // Green text

      // Reset the form fields
      document.getElementById('contact-form').reset();
    }, function(error) {
      // Display error message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = 'Error: Please try again.'; // Error message
      confirmationMessage.style.color = 'red'; // Red text
    });
  });
}


// FORM AUTO SENT TO EMAIL
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const renovation = document.getElementById('renovation').value;

    // Get project description
    const projectDescription = document.getElementById('projectDescription').value;

    // Send the form data using EmailJS
    emailjs.send('service_l2l3osb', 'template_rb705w8', {
      name: name,
      phone: phone,
      email: email,
      renovation: renovation,
      project_description: projectDescription
    })
    .then(function(response) {
      // Display success message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = 'Message sent successfully!'; // Success message
      confirmationMessage.style.color = 'green'; // Green text

      // Reset the form fields
      document.getElementById('contact-form').reset();

      // Hide the confirmation message after 5 seconds
      setTimeout(() => {
        confirmationMessage.textContent = ''; // Clear the message
      }, 5000); // 5000 milliseconds = 5 seconds
    }, function(error) {
      // Display error message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = 'Error: Please try again.'; // Error message
      confirmationMessage.style.color = 'red'; // Red text

      // Hide the confirmation message after 5 seconds
      setTimeout(() => {
        confirmationMessage.textContent = ''; // Clear the message
      }, 5000); // 5000 milliseconds = 5 seconds
    });
  });
}










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









document.addEventListener('DOMContentLoaded', function() {
    const validPages = ['index.html', 'wedo.html', 'contact.html', 'other-valid-page.html']; // List your valid pages

    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');

            if (validPages.includes(href)) {
                // Allow the navigation
                window.location.href = href;
            } else {
                // Redirect to the 404 page
                window.location.href = '/404.html';
            }

            event.preventDefault(); // Prevent the default action
        });
    });
});

