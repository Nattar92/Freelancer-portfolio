document.addEventListener('DOMContentLoaded', function(){

    const btnDarkMode = document.querySelector(".dark-mode-btn");

    btnDarkMode.onclick = function () {
        btnDarkMode.classList.toggle("dark-mode-btn--active");
        const isDark = document.body.classList.toggle('dark');

        if (isDark) {
            localStorage.setItem('darkMode','dark')
        } else {
            localStorage.setItem('darkMode','light');
        }
    }

    if (localStorage.getItem('darkMode') !== 'undefined') {
        document.body.classList.toggle(localStorage.getItem('darkMode'));

        if (localStorage.getItem('darkMode') == 'dark') {
            btnDarkMode.classList.toggle("dark-mode-btn--active");
        }
    }
});