
// document.addEventListener('click',ev => {
//
//     if(ev.target.classList.contains("slider-list__img")){
//         let mainImg = document.querySelector('.slider__img')
//         let tmp = ev.target.attributes.src.value
//         ev.target.setAttribute('src', mainImg.attributes.src.value)
//         mainImg.setAttribute('src', tmp)
//
//     }
//
// })



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".right",
        prevEl: ".left",
    },
    loop: true,
});