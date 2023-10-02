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


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 0) {
       document.querySelector('header').classList.add('headerScroll')
    }
    else {
        document.querySelector('header').classList.remove('headerScroll')
    }
})
