new Swiper('.kinds .swiper-container', {
    autoplay: {
        delay: 6000
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.kinds .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.kinds .swiper-prev',
        nextEl: '.kinds .swiper-next',
    }
})

// find elements(.fade-in).
const fadeEls = document.querySelectorAll('.main .fade-in')
// repeatedly deal with the elements!
fadeEls.forEach(function (fadeEl, index) {
    // 각 요소들을 순서대로(delay) 보여지게 함!
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})




