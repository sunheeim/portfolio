$(function () {

    /* 메뉴 클릭 부드럽게 스크롤 */
    $('a').on('click', function (e) {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500)
    })

    /* 메뉴바 이동 */

    let bar = $('.menu_bar')
    let menu = $('.menu li')
    let menuWidth = $('.menu li').outerWidth();
    console.log(menuWidth)
    $('.menu_bar').css({
        'width': menuWidth
    })

    $('.menu li').mouseenter(function () {
        let moveLeft = $(this).position().left;
        let moveWidth = $(this).outerWidth();

        $('.menu_bar').stop().animate({
            width: moveWidth,
            left: moveLeft
        });
    });


    /* 스크롤시 menu 애니메이션 */
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        console.log(scrollBar)

        if ($('.main_visual').offset().top <= scrollBar) {

            bar.stop().animate({
                'width': menu.eq(0).outerWidth(),
                'left': menu.eq(0).position().left
            })

        }
        if ($('.portfolio .Responsive').offset().top - 50 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(1).outerWidth(),
                'left': menu.eq(1).position().left
            })
        }
        if ($('.portfolio .Adaptive').offset().top - 100 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(2).outerWidth(),
                'left': menu.eq(2).position().left
            })
        }
        if ($('.portfolio .Adaptive_im').offset().top - 150 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(3).outerWidth(),
                'left': menu.eq(3).position().left
            })
        }
        if ($('.portfolio .onlydesign').offset().top - 150 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(4).outerWidth(),
                'left': menu.eq(4).position().left
            })
        }
        if ($('.portfolio .mobile_web').offset().top - 150 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(5).outerWidth(),
                'left': menu.eq(5).position().left
            })
        }
        if ($('.portfolio .Graphic').offset().top - 200 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(6).outerWidth(),
                'left': menu.eq(6).position().left
            })
        }
        if ($('.contact').offset().top - 400 <= scrollBar) {
            bar.stop().animate({
                'width': menu.eq(7).outerWidth(),
                'left': menu.eq(7).position().left
            })
        }
        


    });


    /* --secntion - Graphic 슬라이드-- */
    $('.slider').slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerPadding: '50px',
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 960,
              settings: {
                centerPadding: '0',
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    });


    /* --Fancy box-- */

    Fancybox.bind("[data-fancybox]", {

    });

    /* 767px 이하 메뉴바 */
    let menuBtn = document.getElementsByClassName('menu_open')[0];
    let mobMenu = document.getElementsByClassName('mob_gnb')[0];
    let closeBtn = document.getElementsByClassName('menu_close')[0];

    menuBtn.addEventListener('click', () => {
        if(getComputedStyle(mobMenu).display === 'none') {
            mobMenu.style.display = 'block';
        } else {
            mobMenu.style.display = 'none';
        }
    });
    closeBtn.addEventListener('click', () => {
        if(getComputedStyle(mobMenu).display === 'block') {
            mobMenu.style.display = 'none';
        }
    });


});