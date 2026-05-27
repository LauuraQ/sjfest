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

    const navsAdvantagesBtns = document.querySelectorAll('.advantages__nav');
    const tabsAdvantages = document.querySelectorAll('.advantages__tab');



    const allNavs = document.querySelectorAll('.advantages__nav');
    const allTabs = document.querySelectorAll('.advantages__tab');

    for (let currentBtn = 0; currentBtn < allNavs.length; currentBtn++) {
        allNavs[currentBtn].addEventListener('click', () => {
            for (let currentTab = 0; currentTab < 0; currentTab++)
                ;
        })
    };












    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            enabled: false,
        },

        breakpoints: {
            1920: {
                slidesPerView: 9,
                grid: {

                    rows: 3,
                    fill: 'row',
                },
            },
            1320: {
                slidesPerView: 6,
                grid: {
                    rows: 3,
                    fill: 'row',
                }, pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }, autoplay: {
                    enabled: true,
                },
            },
            600: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                    fill: 'row',
                },
            }
        }
    });
});