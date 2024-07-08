// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.navBar');
    if (navBar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                navBar.classList.add('shadow');
            } else {
                navBar.classList.remove('shadow');
            }
        });
    }
});
