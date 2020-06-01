export default function loadContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');
    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';
    
    // Submission form
    const contactForm = document.createElement('form');

    const nameDiv = document.createElement('div');
    const nameLabel = document.createElement('label');
    const nameField = document.createElement('input');
    const emailDiv = document.createElement('div');
    const emailLabel = document.createElement('label');
    const emailField = document.createElement('input');
    const messageDiv = document.createElement('div');
    const messageLabel = document.createElement('label');
    const messageField = document.createElement('textarea');
    const submitBtn = document.createElement('button');
    
    nameLabel.setAttribute('for', 'name-field');
    nameLabel.textContent = 'Name: ';
    nameField.setAttribute('id', 'name-field');
    nameField.setAttribute('type', 'text');
    nameField.required = true;
    emailLabel.setAttribute('for', 'email-field');
    emailLabel.textContent = 'Email: ';
    emailField.setAttribute('id', 'email-field');
    emailField.setAttribute('type', 'email');
    emailField.required = true;
    messageLabel.setAttribute('for', 'message-field');
    messageLabel.textContent = 'Message: ';
    messageField.setAttribute('id', 'message-field');
    messageField.required = true;
    submitBtn.textContent = 'Submit';

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameField);
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailField);
    messageDiv.appendChild(messageLabel)
    messageDiv.appendChild(messageField);


    contactForm.appendChild(nameDiv);
    contactForm.appendChild(emailDiv);
    contactForm.appendChild(messageDiv);
    contactForm.appendChild(submitBtn);


    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(contactForm);

    // Append contact div to overlay div
    document.querySelector('.overlay').appendChild(contactDiv);

    // Event listener
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove form
        document.querySelector('.overlay').removeChild(contactDiv);

        // Display message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message-div');
        const messageHeading = document.createElement('h2');
        messageHeading.textContent = 'Your Message Was Sent';
        const closeBtn = document.createElement('span');
        closeBtn.textContent = 'X';

        messageDiv.appendChild(messageHeading);
        messageDiv.appendChild(closeBtn);

        document.querySelector('.overlay').appendChild(messageDiv);

        // Event Listener
        closeBtn.addEventListener('click', () => {
            document.querySelector('.overlay').removeChild(messageDiv);
        })
    });
}