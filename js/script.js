document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.js-burger');
    const navsMobile = document.querySelectorAll('.js-toggleNav');

    function toggleNav() {
        navsMobile.forEach(function (nav) {
            nav.classList.toggle('hiddenMobile')
        })
    }

    burger.addEventListener('click', () => {
        toggleNav();
    })

    navsMobile.forEach(nav => {
        nav.querySelectorAll('a').forEach((link, index) => {
            link.addEventListener('click', () => {
                toggleNav();
            })
        })
    })

    /* Header scroll */
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll > 0) {
            document.querySelector('header').classList.add('headerScroll')
        }
        else {
            document.querySelector('header').classList.remove('headerScroll')
        }
    })

    const accordions = Array.from(document.querySelectorAll('.accordion'));

    accordions.map((accordion) => {

        accordion.querySelector('#accordion__btn').addEventListener('click', () => {

            accordion.querySelector('.accordionContent__txt').classList.toggle('showAccordion');
            accordion.querySelector('.accordion__img').classList.toggle('imgAnimation');
        })
    })
})


//Accordion

/* const accordion__btn = document.querySelectorAll('#accordion__btn');
const Accordion__img = document.querySelectorAll('#accordion__img');

accordion__btn.forEach(accordion =>{

    accordion.addEventListener('click', ()=> {
        Accordion__txt.classList.toggle('showAccordion');
        Accordion__img.classList.toggle('imgAnimation');
    })
})
 */


