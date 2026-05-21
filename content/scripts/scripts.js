document.addEventListener("DOMContentLoaded", () => {
    // Переменные
    const header = document.querySelector('.header');




    // Функции
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('header--scrolled');
        }
        else {
            header.classList.remove('header--scrolled');
        }
    })
});