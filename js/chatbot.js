// Chatbot functionality
function toggleChatbot() {
    const chatWindow = document.getElementById('chatbotWindow');
    chatWindow.classList.toggle('active');
    
    // Focus on input when opening
    if (chatWindow.classList.contains('active')) {
        document.getElementById('chatInput').focus();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot__message chatbot__message--${sender}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Services
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
        return 'We offer residential construction, habitat space development, maintenance & repairs, ceramic installation, water & drainage installation, and painting & finishing services. Would you like to know more about any specific service?';
    }
    
    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
        return 'We\'ve completed over 200 projects including two-story houses, structural renovations, and kitchen remodels. Visit our Projects page to see our portfolio!';
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
        return 'You can reach us at 517-212-7062 or email us at abonula@sybascend.com. We\'re available MON-FRI: 8 AM - 5 PM. Visit our Contact page for more details!';
    }
    
    // Location
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('address')) {
        return 'We\'re located at 3589 Otsego Dr, Okemos, Michigan 48864. We serve the greater Michigan area.';
    }
    
    // Quote/Price
    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
        return 'We provide custom quotes based on your specific project needs. Please visit our Contact page or call us at 517-212-7062 to discuss your project and get a personalized quote.';
    }
    
    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('how long')) {
        return 'SYB ASCEND has been building excellence since 2014. We have over 10 years of experience in the construction industry with 200+ completed projects!';
    }
    
    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return 'Hello! Welcome to SYB ASCEND Construction. How can I assist you with your construction needs today?';
    }
    
    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return 'You\'re welcome! Feel free to ask if you have any other questions about our construction services.';
    }
    
    // Default response
    return 'Thank you for your message! For detailed information about our services, projects, or to get a quote, please visit our website pages or contact us directly at 517-212-7062. How else can I help you?';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', function() {
    console.log('SYB ASCEND Chatbot initialized');
});
