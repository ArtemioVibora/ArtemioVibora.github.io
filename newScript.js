const input = document.getElementById('myInput');
const loader = document.getElementById('loading-screen');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const value = input.value.trim().toLowerCase();
        if (value === 'transform') {
            // Show loader
            loader.style.visibility = 'visible';

            // Wait a little before redirecting (so animation is visible)
            setTimeout(() => {
                window.location.href = 'transform.html';
            }, 1500); // 1.5s loading animation
        }
    }
});