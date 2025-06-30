// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Here you can add your form submission logic
    console.log('Form submitted:', { name, email, phone });
    
    // Reset form
    this.reset();
    alert('Thank you for your message!');
});

// Resume button click handler
document.querySelector('.resume-btn').addEventListener('click', function() {
    // Add your resume download or view logic here
    window.open('path/to/your/resume.pdf', '_blank');
});