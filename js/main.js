$(function () {

    /* 메뉴 클릭 부드럽게 스크롤 */
    $('a').on('click', function (e) {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500)
    })

    /* 메뉴바 이동 */

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


    /* 스크롤시 Deco 애니메이션 */

    /* responsive web - item01 deco */
    let responItem = $('.portfolio .Responsive .item01')
    let responLine = $('.portfolio .Responsive .item01 .box .deco .line');
    let responDecoImg = $('.portfolio .Responsive .item01 .box .deco figure')
    let responItem01Top = responItem.offset().top;

    /* responsive web - item02 line */
    let responItem02 = $('.portfolio .Responsive .item02')
    let respon02Line = $('.portfolio .Responsive .item02 .box .deco .line');
    let respon02DecoImg = $('.portfolio .Responsive .item02 .box .deco figure')
    let responitem02Top = responItem02.offset().top;

    /* Adaptive web - item01 deco */
    let adapItem = $('.portfolio .Adaptive .item01')
    let adapLine = $('.portfolio .Adaptive .item01 .box .deco .line');
    let adapDecoImg = $('.portfolio .Adaptive .item01 .box .deco figure')
    let adapItem01Top = adapItem.offset().top;

    /* Adaptive web - item02 deco */
    let adapItem02 = $('.portfolio .Adaptive .item02')
    let adap02Line = $('.portfolio .Adaptive .item02 .box .deco .line');
    let adap02DecoImg = $('.portfolio .Adaptive .item02 .box .deco figure')
    let adapItem02Top = adapItem02.offset().top;

    /* Adaptive_im web - item01 deco */
    let adapimItem = $('.portfolio .Adaptive_im .item01')
    let adapimLine = $('.portfolio .Adaptive_im .item01 .box .deco .line');
    let adapimDecoImg = $('.portfolio .Adaptive_im .item01 .box .deco figure')
    let adapimItem01Top = adapimItem.offset().top;

    /* Adaptive_im web - item02 deco */
    let adapimItem02 = $('.portfolio .Adaptive_im .item02')
    let adapim02Line = $('.portfolio .Adaptive_im .item02 .box .deco .line');
    let adapim02DecoImg = $('.portfolio .Adaptive_im .item02 .box .deco figure')
    let adapimItem02Top = adapimItem02.offset().top;

    /* onlydesign - item01 deco */
    let designItem = $('.portfolio .onlydesign .item01')
    let designLine = $('.portfolio .onlydesign .item01 .box .deco .line');
    let designDecoImg = $('.portfolio .onlydesign .item01 .box .deco figure')
    let designItem01Top = designItem.offset().top;

    /* mobile_web - item01 deco */
    let mobileItem = $('.portfolio .mobile_web .item01')
    let mobileLine = $('.portfolio .mobile_web .item01 .box .deco .line');
    let mobileDecoImg = $('.portfolio .mobile_web .item01 .box .deco figure')
    let mobileItem01Top = mobileItem.offset().top;

    /* mobile_web - item02 deco */
    let mobileItem02 = $('.portfolio .mobile_web .item02')
    let mobile02Line = $('.portfolio .mobile_web .item02 .box .deco .line');
    let mobile02DecoImg = $('.portfolio .mobile_web .item02 .box .deco figure')
    let mobileItem02Top = mobileItem02.offset().top;

    let graphic = $('.portfolio .Graphic')
    let graphicTop = graphic.offset().top;

    let contect = $('.contect')
    let contectTop = contect.offset().top;

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();

        /* responsive web - item01 deco */
        if (scrollBar + 200 > responItem01Top) {
            responLine.addClass('on');
            responDecoImg.addClass('on');
            $('.menu_bar').stop().animate({
                width: menu.eq(1).outerWidth(),
                left: menu.eq(1).position().left
            });
        }
        /* responsive web - item02 deco */
        if (scrollBar + 200 > responitem02Top) {
            respon02Line.addClass('on');
            respon02DecoImg.addClass('on');
        }
        /* Adaptive web - item01 deco */
        if (scrollBar + 200 > adapItem01Top) {
            adapLine.addClass('on');
            adapDecoImg.addClass('on');
            $('.menu_bar').stop().animate({
                width: menu.eq(2).outerWidth(),
                left: menu.eq(2).position().left
            });
        }
        /* Adaptive web - item02 deco */
        if (scrollBar + 200 > adapItem02Top) {
            adap02Line.addClass('on');
            adap02DecoImg.addClass('on');

        }
        /* Adaptive web - item01 deco */
        if (scrollBar + 200 > adapimItem01Top) {
            adapimLine.addClass('on');
            adapimDecoImg.addClass('on');
            $('.menu_bar').stop().animate({
                width: menu.eq(3).outerWidth(),
                left: menu.eq(3).position().left
            });
        }
        /* Adaptive web - item02 deco */
        if (scrollBar + 200 > adapimItem02Top) {
            adapim02Line.addClass('on');
            adapim02DecoImg.addClass('on');
        }
        /* onlydesign - item01 deco */
        if (scrollBar > designItem01Top) {
            designLine.addClass('on');
            designDecoImg.addClass('on');
            $('.menu_bar').stop().animate({
                width: menu.eq(4).outerWidth(),
                left: menu.eq(4).position().left
            });
        }
        /* mobile_web - item01 deco */
        if (scrollBar > mobileItem01Top) {
            mobileLine.addClass('on');
            mobileDecoImg.addClass('on');
            $('.menu_bar').stop().animate({
                width: menu.eq(5).outerWidth(),
                left: menu.eq(5).position().left
            });
        }
        /* mobile_web - item02 deco */
        if (scrollBar > mobileItem02Top) {
            mobile02Line.addClass('on');
            mobile02DecoImg.addClass('on');
        }
        /* graphic */
        if (scrollBar > graphicTop) {
            $('.menu_bar').stop().animate({
                width: menu.eq(6).outerWidth(),
                left: menu.eq(6).position().left
            });
        }
        /* contect */
        if (scrollBar > contectTop) {
            $('.menu_bar').stop().animate({
                width: menu.eq(7).outerWidth(),
                left: menu.eq(7).position().left
            });
        }
        console.log(responItem01Top)
        console.log(scrollBar)


    });


    /* --secntion - Graphic 슬라이드-- */
    $('.slider').slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    /* --Fancy box-- */

    Fancybox.bind("[data-fancybox]", {

    });


});