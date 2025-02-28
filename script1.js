// Initialize EmailJS (you must have created an EmailJS account)
emailjs.init("M_1-YVVQ72zKJROid"); // Replace with your EmailJS user ID

// Form Submit
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Prepare the email data (template parameters)
    const templateParams = {
        to_email: 'giulialim.gl@gmail.com',  // The recipient email address
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_carl123', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        })
        .catch(function(error) {
            console.error('Email failed to send:', error);
            alert('Sorry, there was a problem sending your message. Please try again later.');
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
});
