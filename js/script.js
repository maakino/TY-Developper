const burger = document.querySelector('.js-burger');
const navsMobile = document.querySelectorAll('.js-toggleNav');


function toggleNav(){
    navsMobile.forEach(function (nav){
        nav.classList.toggle('hiddenMobile')
    })
}

burger.addEventListener('click', () =>{
    toggleNav();
})

navsMobile.forEach(nav =>{
    nav.querySelectorAll('a').forEach((link, index)=>{
        link.addEventListener('click',()=>{
        toggleNav();
        })
    })
})






