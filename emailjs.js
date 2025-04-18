
  emailjs.init('b_gxtqaXvH1pM8y6w'); 
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Send the email using EmailJS
    emailjs.send('service_nurznhb', 'template_kkq3g91', formData)
      .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  });