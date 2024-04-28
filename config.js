document.addEventListener("DOMContentLoaded", function() {
    const nextText = document.querySelector('.next p');

    function fadeIn(element, delay = 0) {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Initially set styles for animation
    nextText.style.opacity = 0;
    nextText.style.transform = 'translateY(20px)';

    // Apply animations
    fadeIn(nextText, 2000); 

    // Add click event to proceed
    nextText.addEventListener('click', function() {
        window.location.replace("main.html");
    });
});


const foot = document.getElementById('mee')
foot.style.color = '#6D2932'
foot.style.textAlign = 'center'
foot.style.marginTop = '50px'
foot.style.fontWeight = '600'