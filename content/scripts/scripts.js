document.addEventListener("DOMContentLoaded", () => {
    // Переменные
    const header = document.querySelector('.header');
    const menuDropDown = document.querySelector('.header__menu-item--submenu');
    const menuDropDownOpen = document.querySelector('.header__submenu');


    //Отрисовка задника для хедера и смена цвета кнопок при прокрутке
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
        menuDropDownOpen.classList.toggle('active');
    })

    menuDropDownOpen.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Открытие-закрытие бургер-меню
    const menuOpen = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.header__mobile');
    const bgOverlay = document.querySelector('.header__overlay')
    const menuClose = document.querySelector('.header__cross');

    menuOpen.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        bgOverlay.classList.toggle('active');
    });

    menuClose.addEventListener('click', () => {

        mobileMenu.classList.toggle('active');
        bgOverlay.classList.toggle('active');
    });
    // 

    // Открытие-закрытие вложенного меню
    const headerMenuItem = document.querySelector('.header__menu-item--mobile');
    const subMenu = document.querySelector('.header__submenu--mobile');

    headerMenuItem.addEventListener('click', () => {
        subMenu.classList.toggle('active');
    });

    subMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // 

    // Куки плашка

    const policy = document.querySelector('.policy__container');
    const policyCloseBtn = document.querySelector('.policy__btn');

    policyCloseBtn.addEventListener('click', () => {
        policy.classList.toggle('disable');
    });

    // 







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