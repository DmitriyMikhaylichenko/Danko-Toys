
const visibleMenuBody = '0px'
const invisibleMenuBody = '-500px'
const invisibleMobileBody = '-400px'
const visibleMobileBody = '118px'
const menu = document.querySelector(".menu")
const catalog = document.querySelector(".catalog-header")
const mobileBody = document.querySelector(".catalog__mobile-body")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuBody = document.querySelector(".mobile-menu__body")

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation()
    if(getComputedStyle(menu).display === 'none') {
        mobileBody.style.top = invisibleMobileBody
        getComputedStyle(mobileMenuBody).left !== visibleMenuBody ? mobileMenuBody.style.left = visibleMenuBody : mobileMenuBody.style.left = invisibleMenuBody
    }
})

catalog.addEventListener('click', (e) => {
    e.stopPropagation()
    if(getComputedStyle(menu).display === 'none') {
        mobileMenuBody.style.left = invisibleMenuBody
        getComputedStyle(mobileBody).top !== visibleMobileBody ? mobileBody.style.top = visibleMobileBody : mobileBody.style.top = invisibleMobileBody
    }
})



$('.slider-top').slick ({
    autoplay:true,
    autoplaySpeed:3000,
    infinite:true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false
            }
        }
    ]
})

$('.receipts__items').slick ({
    slidesToShow: 4,
    appendArrows: $('.receipts__controls'),
    infinite: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 678,
            settings: {
                slidesToShow: 1
            }
        }
    ]

})

