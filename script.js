function scrollHEader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50)  header.classList.add('scroll-header');
    else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHEader)

// =======================SWIPER POPULAR=============*/
var swiperPopular = new Swiper(".popular__container",{
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPrevView: 'auto',
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})