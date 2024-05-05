const closeIcon = document.querySelector('#close-icon'); // Updated to match the correct ID
const navbar = document.querySelector('#navbar');
const overlay = document.querySelector('#overlay');
const menuButton = document.querySelector('#menu-toggle'); // Updated to match the correct ID

menuButton.addEventListener('click', () => {
    navbar.classList.add('show-menu');
    overlay.style.display = 'block';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('show-menu');
    overlay.style.display = 'none';
    closeIcon.style.display = 'none';
});

overlay.addEventListener('click', () => {
    navbar.classList.remove('show-menu');
    overlay.style.display = 'none';
    closeIcon.style.display = 'none';
});
