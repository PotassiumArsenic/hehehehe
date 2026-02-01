// JavaScript for interactive functionality

// Button click handlers
const noBtn = document.querySelector('.btn-no');
const yesBtn = document.querySelector('.btn-yes');
const buttonContainer = document.querySelector('.button-container');

let clickCount = 0;
let buttonsSwapped = false;

// Yes button click handler
yesBtn.addEventListener('click', function() {
    // Redirect to yes.html
    window.location.href = 'yes.html';
});

// Function to show success page with confetti
function showSuccessPage() {
    const successPage = document.getElementById('success');
    const aboutSection = document.getElementById('about');
    
    // Hide about section
    aboutSection.classList.add('hidden');
    
    // Show success page
    successPage.classList.remove('hidden');
    
    // Generate confetti
    createConfetti();
}

// Function to create confetti animation
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.delay = Math.random() * 0.5 + 's';
        confetti.style.duration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}


noBtn.addEventListener('click', function() {
    clickCount++;
    
    // Toggle positions on each click
    if (buttonsSwapped) {
        noBtn.style.order = '2';
        yesBtn.style.order = '1';
        buttonsSwapped = false;
    } else {
        noBtn.style.order = '1';
        yesBtn.style.order = '2';
        buttonsSwapped = true;
    }
    
    // Increase Yes button size with each click
    const scaleAmount = 1 + (clickCount * 0.5);
    yesBtn.style.transform = `scale(${scaleAmount})`;
    
    // Show toast notification
    showToast('Try again');
    
    // Shrink button back to original size after 5th click
    if (clickCount === 5) {
        yesBtn.classList.add('shrink');
        yesBtn.style.transform = 'scale(1)';
        setTimeout(() => {
            yesBtn.classList.remove('shrink');
            clickCount = 0;
        }, 1500);
    }
});


// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    // Create image element
    const img = document.createElement('img');
    img.src = 'assets/bunny-sad.webp';
    img.alt = 'sad bunny';
    
    // Create text element
    const textSpan = document.createElement('span');
    textSpan.textContent = message;
    
    // Append image and text to toast
    toast.appendChild(img);
    toast.appendChild(textSpan);
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Example: Log when page loads
window.addEventListener('load', function() {
    console.log('Page loaded successfully!');
    // Set initial order for buttons
    yesBtn.style.order = '1';
    noBtn.style.order = '2';
});
        
    

