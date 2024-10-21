// dropdawn nav manue 
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
});









// hero slide show 
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.image-slider');
    const slides = slider.querySelectorAll('img');
    let currentSlide = 0;

    function slideImages() {
        const slideWidth = slides[0].clientWidth + 10; // Include gap between images
        currentSlide++;
        
        // Reset to first slide if reaching the last original slide
        if (currentSlide >= slides.length / 2) {
            currentSlide = 0; // Reset to first slide
            slider.style.transition = 'none'; // Disable transition to jump to start
            slider.style.transform = `translateX(0)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            }, 50);
        }
        
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    setInterval(slideImages, 4000); // Slide every 4 seconds
});



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








