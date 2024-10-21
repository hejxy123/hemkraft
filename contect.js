// header manu 
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('active');
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

