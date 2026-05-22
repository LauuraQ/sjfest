document.addEventListener("DOMContentLoaded", () => {
    // Переменные
    const header = document.querySelector('.header');
    const menuDropDown = document.querySelector('.header__menu-item--submenu');
    const menuDropDownOpen = document.querySelector('.header__menu-item--submenu--open');


    // Функции
    //Отрисовка задника для хедера и смена цвета кнопок
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('header--scrolled');
        }
        else {
            header.classList.remove('header--scrolled');
        }
    })
    //Открытие-Закрытие выпадающего в меню навигации
    menuDropDown.addEventListener('click', () => {
        menuDropDown.classList.toggle('header__menu-item--submenu--open');
    })

});