document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('support-form');
    const successMessage = document.getElementById('success-message');
    
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const requestType = document.getElementById('request-type').value;
            const email = document.getElementById('email').value;
            const name = document.getElementById('name').value;
            const lastname = document.getElementById('lastname').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Send email with EmailJS
            emailjs.send('service_s2d8cbw', 'template_rey70h8', {
                request_type: requestType,
                from_email: email,
                from_name: name + (lastname ? ' ' + lastname : ''),
                subject: subject,
                message: message,
                reply_to: email
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                supportForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was an error sending your message. Please try again later.');
            });
        });
    }
});
