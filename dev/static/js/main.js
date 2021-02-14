$(document).ready(function () {
    svg4everybody({});
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

//swiper.js
var swiperReviews = new Swiper('.reviews-slider', {
    orientation: 'vertical',
    slidesPerView: 1.04,
    spaceBetween: 20,
    slidesPerColumn: 2,
    breakpoints: {
        700: {
            slidesPerView: 2.05,
            spaceBetween: 20,
            slidesPerColumn: 2
        },
        900: {
            slidesPerView: 3.07,
            spaceBetween: 30,
            slidesPerColumn: 2
        }
    },
    slidesPerColumnFill: 'row',

    navigation: {
        nextEl: '.reviews-slider__btn-next',
        prevEl: '.reviews-slider__btn-prev',
    },
})

var swiperPortfolio = new Swiper('.portfolio-slider', {
    navigation: {
        nextEl: '.portfolio-slider__btn-next',
        prevEl: '.portfolio-slider__btn-prev',
    },
})

var swiperMain = new Swiper('.main-slider', {
    loop: true,
    pagination: {
        el: '.main-slider__pagination',
        type: 'bullets',
    },
})

var swiperProduct = new Swiper('.product-slider', {
    loop: false,
    navigation: {
        nextEl: '.product-slider__btn-next',
        prevEl: '.product-slider__btn-prev',
    },
})

//menu
const sandwichToggle = function () {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.sandwich');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
        $(document).mouseup(function(e)
        {
            var container = $(".nav-mobile");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                document.querySelector('.sandwich').classList.remove('is-active');
                document.getElementById(targetId).classList.remove(targetClassToggle);
            }
        });
    }
};
sandwichToggle();

const navMobile = document.querySelector('.nav-mobile')
const navHeader = document.querySelector('.header__nav')
const searchHeader = document.querySelector('.search')
const socialsHeader = document.querySelector('.header__socials')
const btnHeader = document.querySelector('.header__btn')
const topPanelHeader = document.querySelector('.header__top-panel')
const sandwich = document.querySelector('.sandwich')
const phonesHeader = document.querySelectorAll('.contacts__item_mobile_sandwich')
const contactsHeader = document.querySelector('.header__contacts')
$(window).on("resize", function () {
    if($(window).width() <= 1660){
        navMobile.appendChild(navHeader)
    } else {
        document.querySelector('.header__content').appendChild(navHeader)
    }
    if($(window).width() <= 950){
        navMobile.appendChild(btnHeader)
    } else {
        document.querySelector('.header__btns').insertBefore(btnHeader, sandwich)
    }
    if($(window).width() <= 650){
        navMobile.appendChild(searchHeader)
    } else {
        topPanelHeader.appendChild(searchHeader)
    }
    if($(window).width() <= 500){
        navMobile.appendChild(socialsHeader)
        for (let i = 0; i < phonesHeader.length; i++) {
            navMobile.appendChild(phonesHeader[i])
        }
    } else {
        topPanelHeader.appendChild(socialsHeader)
        for (let i = 0; i < phonesHeader.length; i++) {
            contactsHeader.prepend(phonesHeader[i])
        }
    }
}).resize();

//fullpage.js
if($(window).width() > 1023){
    if($("#fullpage").length) {
        fullpage = new fullpage('#fullpage', {
            scrollOverflow: true,
            fixedElements: 'header',
            css3: true,
        });
        $('.before').click(function(){
            fullpage.moveSectionUp();
        });
        $('.section__arrow-down').click(function(){
            fullpage.moveSectionDown();
        });
    }
}

//fancybox modals & gallery
$(document).ready(function() {
    $(".modal-btn").fancybox();

    $('[data-fancybox="gallery"]').each(function () {
        const relValue = $(this).attr('rel')
        $('[data-fancybox="gallery"][rel="'+relValue+'"]').fancybox({})
    })
})

//btn up
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()!=0) {
            $('#toTop').fadeIn(500);
        }
        else {
            $('#toTop').fadeOut(500);
        }
    });
    if ($(this).scrollTop()!=0) {
        $('#toTop').fadeIn();
    }
    else {
        $('#toTop').fadeOut();
    }
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});