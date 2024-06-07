document.addEventListener("DOMContentLoaded", function() {
    function onMouseMove(event) {
        document.body.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, #122044, #0f172a 50%)';
    }

    document.addEventListener("mousemove", onMouseMove);
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// function sendMessage() {
//     var form = document.getElementById("message");

//     if (form.checkValidity()) {
//         // Assuming you have your form data in an object
//         var formData = {
//             Name: form.elements["Name"].value,
//             Email: form.elements["Email"].value,
//             Subject: form.elements["Subject"].value,
//             Message: form.elements["Message"].value
//         };

//         // Send the form data to Google Docs using fetch or XMLHttpRequest
//         fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS5TLAs6nJE2yyIUQUMOO1GRjpAzhelGFAtzDfYKusaZq_5CluAXrujBJFWCWHh_Kj-exnPQWtExrkV/pub?output=ods', {
//             method: 'POST',
//             body: JSON.stringify(formData),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             form.reset();
//             alert("Message sent!");
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     } else {
//         // Handle invalid form submission
//     }
//     return false; // To prevent default form submission
// }

// // Function to collect form data and send message via WhatsApp
function sendMessage() {
    // Prevent form from submitting
    event.preventDefault();
    
    // Get form element by ID
    const form = document.getElementById('messageForm');
    
    // Get values from form inputs
    const name = form.elements['Name'].value;
    const email = form.elements['Email'].value;
    const subject = form.elements['Subject'].value;
    const message = form.elements['Message'].value;
    
    // Construct the message string
    const messageString = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    
    // Encode message string for URL
    const encodedMessage = encodeURIComponent(messageString);
    
    // Open WhatsApp link with encoded message
    window.open(`https://wa.me/7218233504?text=${encodedMessage}`, '_blank');
}

