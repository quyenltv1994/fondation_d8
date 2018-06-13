(function ($) {
    'use strict';

    var w = jQuery(window).width();
    var h = jQuery(window).height();
    function searchhomein(){
        var t = $('.content-home__left .image').outerHeight()/2,
            //t = (window.innerHeight - $('#header').outerHeight())/2,
            dw = $('.content-home__left__top .description').width(),
            dh =  $('.content-home__left__top .description').outerHeight()/2,
            l =  (dw - $('.content-home__left__top .search').width())/2;

        $('.search').css({top: (t+dh-23)+'px', left: l+"px"});
        // if(w < 1340){
        //     $('.search').css({top: (t+dh-23)+'px'});
        // }
        if(w <768){
            $('.search').css({top: (t+dh-53)+'px'});
        }
    }

    function searchhome() {
        var myVar = setTimeout(searchhomein, 300);
    }

    function resizeewidthmap(){
        setTimeout(function() {
            var widthmapsearch = $(".content-search__right").width();
            var widthsearch = $(".content-search__main").width();
            //var widthsearch = $(".content-search__main").height();
            $(".content-search__left").css("width", widthsearch - widthmapsearch);
            $(".content-search__left .map").css("width", widthsearch - widthmapsearch);
        }, 10);
    }

    function resizeewidthmapAgent(){
        setTimeout(function() {
            var widthmapAgent = $(".content-recherche-agent__right").width();
            var widthsearchAgent = $(".content-recherche-agent__main").width();
            var HeightsearchAgent = $(".content-recherche-agent__main .content-recherche-agent__left .map").height();
            $(".content-recherche-agent__left").css("width", widthsearchAgent - widthmapAgent);
            $(".content-recherche-agent__left").css("height", HeightsearchAgent);
            $(".content-recherche-agent__left .map").css("width", widthsearchAgent - widthmapAgent);
        }, 10);

    }

    function setmiddle(){
        setTimeout(function () {
            var HeSearchRight = $(".list-search__item__right").innerHeight();
            //console.log(HeSearchRight);
            var HeItemTop = $(".list-search__item__right .item-top").innerHeight();
            //console.log(HeItemTop);
            var HeItemMiddle = $(".list-search__item__right .item-middle").innerHeight();
            //console.log(HeItemMiddle);
            var HeItemBottom = $(".list-search__item__right .item-bottom").innerHeight();
            //console.log(HeItemBottom);
            var EndHeItemMiddle = ((HeSearchRight - HeItemTop - HeItemBottom - HeItemMiddle - 45)/2);
            //console.log(EndHeItemMiddle);
            $(".list-search__item__right .item-middle").css("margin-top", EndHeItemMiddle);
        }, 1000);
    }

    function he_content_home_left(){
        var h = jQuery(window).height();
        var HLeft = h - 50;
        $("body.add-bottom .content-home__left .inner").css("height", HLeft);
    }

    function he_list_search(){
        var HeSearchTitle = $(".content-recherche-agent__main .search-title").innerHeight();
        var HeSearchPaging = $(".content-recherche-agent__main .paging").innerHeight();
        var HeFooter = $(".footer").innerHeight();
        //$(".recherche-agent .main__content").css("min-height", (h - 50 - HeFooter));
        $(".content-recherche-agent__main .list-search").css("min-height", (h - HeSearchTitle - HeSearchPaging - HeFooter - 60));

        var HeResultSearchTitle = $(".content-search__main .search-title").innerHeight();
        var HeResultSearchPaging = $(".content-search__main .paging").innerHeight();
        $(".content-search__main .list-search").css("min-height", (h - HeResultSearchTitle - HeResultSearchPaging - HeFooter - 56));

        //var HeMap = $(".content-recherche-agent__left .map").innerHeight();
        //$(".content-recherche-agent__main .content-recherche-agent__left").css("height", HeMap - HeFooter);
    }

    function Time_he_list_search() {
        var myVar = setTimeout(he_list_search, 0);
    }

    function HeightMenuMobile(){
        var HeightMenu = $("header .menu ul").innerHeight();
        if((HeightMenu + 78 + 50) > h){
            $("header .menu").css("min-height", h - 50);
        } else {
            $("header .menu").css("min-height", HeightMenu + 78);
        }
    }
    function GetPaddingBT(){
        if(w > 1339){
            if(!$('.page-home').length){
                var PaddingBottomBT = $(".footer").innerHeight();
                $("body").css("padding-bottom", PaddingBottomBT);
            //    $(".main").css("padding-bottom", PaddingBottomBT);
            }
        }
    }
    function GetHeightSlider(){
        var HeightSlider = $(".detail-slide #slider .slides img").innerHeight();
        var HeightCarousel = $(".detail-slide #carousel .slides img").innerHeight();
        $(".detail-slide").css("height", HeightSlider + HeightCarousel + 110);
    }

    function SlideEquipe(){
        $('.equipe .group-member').owlCarousel({
            items:3,
            loop:false,
            margin:0,
            nav:true,
            navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                767:{
                    items:3
                }
            }
        });
    }

    $(document).ready(function () {

        var w = jQuery(window).width();
        var h = jQuery(window).height();

        $('.search select').ddslick({
            //onSelected: function(data) {
            //    Drupal.Ezix.initSearchAutoCompleteByType(data.selectedData.value, '.search__input .input');
            //}
        });


        $('.col-bt .menu').readmore({
            collapsedHeight: 170,
            moreLink: '<a href="#" class="plus">plus</a>',
            lessLink: '<a href="#" class="less">moins</a>',
            speed: 500
        });

        $('.description .texte').readmore({
            collapsedHeight: 160,
            moreLink: '<a href="#" class="plus">Lire la suite<i class="icon-arrow-down"></i></a>',
            lessLink: '<a href="#" class="less">moins<i class="icon-arrow-up"></i></a>',
            speed: 500
        });

        //function activeanimation(){
        //    var stickyanimation = $('.block-marketing').offset().top;
        //    if (($(window).scrollTop() + $(window).height() + 50) >= stickyanimation) {
        //        $('.block-marketing').addClass("active");
        //    } else {
        //        $('.block-marketing').removeClass("active");
        //    }
        //}
        //function activeanimation2(){
        //    var stickyanimation2 = $('.block-estimation-negociation').offset().top;
        //    if (($(window).scrollTop() + $(window).height()) >= stickyanimation2) {
        //        $('.block-estimation-negociation').addClass("active");
        //    } else {
        //        $('.block-estimation-negociation').removeClass("active");
        //    }
        //}
        //function activeanimation3(){
        //    var stickyanimation3 = $('.block-coordination-vente').offset().top;
        //    if (($(window).scrollTop() + $(window).height()) >= stickyanimation3) {
        //        $('.block-coordination-vente').addClass("active");
        //    } else {
        //        $('.block-coordination-vente').removeClass("active");
        //    }
        //}
        //function activeanimation4(){
        //    var stickyanimation4 = $('.block-mise-relation').offset().top;
        //    if (($(window).scrollTop() + $(window).height()) >= stickyanimation4) {
        //        $('.block-mise-relation').addClass("active");
        //    } else {
        //        $('.block-mise-relation').removeClass("active");
        //    }
        //}
        //function activeanimation5(){
        //    var stickyanimation5 = $('.lastdash').offset().top;
        //    if (($(window).scrollTop() + $(window).height()) >= stickyanimation5) {
        //        $('.lastdash').addClass("active");
        //    } else {
        //        $('.lastdash').removeClass("active");
        //    }
        //}
        function activeanimation(target){
            var stickyanimation = $(target).offset().top;
            if (($(window).scrollTop() + $(window).height() + 50) >= stickyanimation) {
                $(target).addClass("active");
            } else {
                $(target).removeClass("active");
            }
        }

        if( $('body.page-home').length ){
            //activeanimation();
            //activeanimation2();
            //activeanimation3();
            //activeanimation4();
            //activeanimation5();
            activeanimation('.block-marketing');
            activeanimation('.block-estimation-negociation');
            activeanimation('.block-coordination-vente');
            activeanimation('.block-mise-relation');
            activeanimation('.lastdash');
        }

        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 1) {
                $(".header").addClass("fixed");
                //$(".action-search").addClass("fixed");
            } else {
                $(".header").removeClass("fixed");
                //$(".action-search").removeClass("fixed");
            }

            if( $('body.page-home').length ){
                //activeanimation();
                //activeanimation2();
                //activeanimation3();
                //activeanimation4();
                //activeanimation5();
                activeanimation('.block-marketing');
                activeanimation('.block-estimation-negociation');
                activeanimation('.block-coordination-vente');
                activeanimation('.block-mise-relation');
                activeanimation('.lastdash');
            }

        });


        new WOW().init();




        //if ($('.footer .footer-logos ul li').length > 8) {
        //    $(".footer .footer-logos ul").addClass("owl-carousel");
        //    $(".footer .footer-logos ul").addClass("owl-theme");
        //    $('.footer .footer-logos ul').owlCarousel();
        //}

        $('.slideday').owlCarousel({
            items:8,
            loop:false,
            margin:0,
            nav:true,
            navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            dots: false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:8
                },
                1000:{
                    items:7
                },
                1150:{
                    items:8
                }
            }
        });
        $('.slideday').on('click', '.owl-item', function(e) {
            e.preventDefault();
            $('.itemday').removeClass('active');
            $(this).find('.itemday:first').addClass('active');
        });

        $('.slidehours').owlCarousel({
            items:8,
            loop:false,
            margin:0,
            nav:true,
            navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            dots: false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:8
                },
                1000:{
                    items:7
                },
                1150:{
                    items:8
                }
            }
        });
        $('.slidehours').on('click', '.owl-item', function(e) {
            e.preventDefault();
            $('.itemhour').removeClass('active');
            $(this).find('.itemhour:first').addClass('active');
        });

        $('.slidedaydetail').owlCarousel({
            items:3,
            loop:false,
            margin:0,
            nav:true,
            navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });
        $('.slidedaydetail').on('click', '.owl-item', function(e) {
            e.preventDefault();
            $('.itemday').removeClass('active');
            $(this).find('.itemday:first').addClass('active');
        });

        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 72,
            itemMargin: 10,
            prevText: "<i class='icon-arrow-left'></i>",
            nextText: "<i class='icon-arrow-right'></i>",
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            prevText: "<i class='icon-arrow-left'></i>",
            nextText: "<i class='icon-arrow-right'></i>",
            sync: "#carousel"
        });


        $('.detail-slider .lists').owlCarousel({
            items:3,
            loop:true,
            margin:10,
            nav:true,
            navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            dots: false,
            responsive:{
                0:{
                    items:1,
                    dots: true
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        $(".nombre-personnes-charge").SumoSelect({
            triggerChangeCombined: true,
            forceCustomRendering: true
        });

        $(".par-theme select.theme").SumoSelect({
            triggerChangeCombined: true,
            forceCustomRendering: true,
            placeholder: 'Par thème'
        });

        $("#webform-submission-rating-form-add-form .form-select").SumoSelect({
            triggerChangeCombined: true,
            forceCustomRendering: true
        });
        $("#webform-submission-vendor-file-add-form .form-select").SumoSelect({
            triggerChangeCombined: true,
            forceCustomRendering: true
        });
        $(".config-custom-generated-rating-link .form-select").SumoSelect({
            triggerChangeCombined: true,
            forceCustomRendering: true
        });


        jQuery('.title-detail .main-tabs a').removeClass("active");
        $("a[href^='#']").click(function(e) {
            e.preventDefault();

            var position = $($(this).attr("href")).offset().top - 220;

            $("body, html").animate({
                scrollTop: position
            } , 500/* speed */ );
            jQuery('.title-detail .main-tabs a').removeClass("active");
            jQuery(this).addClass("active");

        });

        searchhome();
        GetHeightSlider();

        $("form .objet-message").SumoSelect({
            triggerChangeCombined: true,
            forceCustomRendering: true,
            placeholder: 'Objet du message'
        });


        $("#accordion .card .collapse").slideUp();
        $("#accordion .card .btn").click(
            function (e) {
                e.preventDefault();
                var $this = $(this).parent(".card-header").next(".collapse");
                $("#accordion .card .collapse").not($this).slideUp();
                $this.slideToggle("slow");
                $("#accordion .card .btn").not($(this)).removeClass("active");
                $(this).toggleClass("active");
            }
        );

        $(".content-detail-annonce .plan .poi #accordion").mCustomScrollbar({
            theme:"minimal-dark"
        });
        $('#popup_box').hide();
        $('#openpopup').click( function(e) {
            e.preventDefault();
            //$('#popup_box .popup_box_main>div').html($('#block-sharethiswidget-2').html());
            $('#popup_box').fadeIn("slow");
        });
        $('#popupBoxClose').click( function() {
            $('#popup_box').fadeOut("slow");
        });


        [].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach( function( bttn ) {
            new ProgressButton( bttn, {
                callback : function( instance ) {
                    var progress = 0,
                        interval = setInterval( function() {
                            progress = Math.min( progress + Math.random() * 0.1, 1 );
                            instance._setProgress( progress );

                            if( progress === 1 ) {
                                instance._stop(1);
                                clearInterval( interval );
                            }
                        }, 200 );
                }
            } );
        } );

        if(w > 1100){

            $('.content-detail-annonce .side-right .inner-sticky').stickySidebar({
                topSpacing: 189,
                bottomSpacing: 20,
                containerSelector: '.content-detail-annonce .row',
                innerWrapperSelector: '.content-detail-annonce .side-right .inner-sticky .inner'
            });

            $('.content-detail .side-right .inner-sticky').stickySidebar({
                topSpacing: 144,
                //bottomSpacing: 0,
                containerSelector: '.content-detail .row',
                innerWrapperSelector: '.content-detail .side-right .inner-sticky .inner'
            });
        }
        if(w > 1023){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 1) {
                    $(".action-search").addClass("fixed");
                    $(".page-agent .wrap-back").addClass("fixed");
                    //$(".page-detail-actu .wrap-back").addClass("nofixed");
                    //$(".content-detail-annonce .side-right .inner").addClass("fixed");
                } else {
                    $(".action-search").removeClass("fixed");
                    $(".page-agent .wrap-back").removeClass("fixed");
                    //$(".page-detail-actu .wrap-back").removeClass("nofixed");
                    //$(".content-detail-annonce .side-right .inner").addClass("fixed");
                }

                if (scroll > 50){
                    $(".title-detail").addClass("fixed");
                } else {
                    $(".title-detail").removeClass("fixed");
                }
                he_content_home_left();
            });

            $(window).on("scroll", function() {
                var scrollHeight = $(document).height();
                //console.log('$(document).height()',scrollHeight);
                var scrollPosition = $(window).height() + $(window).scrollTop();
                //console.log('$(window).height()', $(window).height());
                //console.log('$(window).scrollTop()', $(window).scrollTop());
                var heft = $('.footer').height();
                //console.log('scrollHeight - $(window).height() - heft', scrollHeight - $(window).height() - heft);
                $(".page-home").removeClass("add-bottom");
                //if ((scrollHeight - scrollPosition) / scrollHeight === 0)
                if ((scrollHeight - $(window).height() - heft) <= $(window).scrollTop()) {
                    $(".page-home").addClass("add-bottom");
                }
            });

            //btn-de-criteres
            $('.btn-de-criteres').click(function () {
                $('.action-search').toggleClass('active');
                $('.innerbt').slideToggle();
                $('.content-search__left .map').toggleClass('active');
            });

            resizeewidthmap();
            resizeewidthmapAgent();
            he_content_home_left();
            Time_he_list_search();
            GetPaddingBT();
        }
        if(w > 767){
            setmiddle();
            $(".list-posts .content .title").dotdotdot();
            $(".list-posts .content .des").dotdotdot();

            jQuery(".equipe .group-member").each(function(){
                if ($(this).children('.item-member').length > 3) {
                    $(this).addClass("owl-carousel");
                    $(this).addClass("owl-theme");
                    SlideEquipe();
                }
            });

        }
        if(w < 1024){
            //btn-de-criteres
            $('.btn-de-criteres').click(function () {
                $('.action-search').toggleClass('active');
                $('.show-hide-mobile .btn-de-criteres').toggleClass('active');
            });

            jQuery(".content-search > .content-search__tabs > .content-search__tab").first().addClass("active");
            jQuery(".content-search > .content-search__tabs > .content-search__tab > a").on('click touchend', function(event){
                event.preventDefault();
                var box = jQuery(this).attr("href");
                jQuery(".content-search > .content-search__tabs > .content-search__tab").removeClass("active");
                jQuery(this).parent(".content-search__tab").addClass("active");
                jQuery(".contenttab").hide();
                jQuery(box).show();
            });

            jQuery(".content-recherche-agent > .content-recherche-agent__tabs > .content-recherche-agent__tab").first().addClass("active");
            jQuery(".content-recherche-agent > .content-recherche-agent__tabs > .content-recherche-agent__tab > a").on('click touchend', function(event){
                event.preventDefault();
                var box = jQuery(this).attr("href");
                jQuery(".content-recherche-agent > .content-recherche-agent__tabs > .content-recherche-agent__tab").removeClass("active");
                jQuery(this).parent(".content-recherche-agent__tab").addClass("active");
                jQuery(".contenttab").hide();
                jQuery(box).show();
            });
            HeightMenuMobile();
        }
        if(w < 768){
            $(".content-home__right .lists").addClass("owl-carousel");
            $(".content-home__right .lists").addClass("owl-theme");
            $('.content-home__right .lists').owlCarousel({
                center: true,
                items:2,
                loop:true,
                margin:15
            });
            $('.informations-quartier').readmore({
                collapsedHeight: 700,
                moreLink: '<a href="#" class="plus">Afficher toutes les informations<i class="icon-arrow-down"></i></a>',
                lessLink: '<a href="#" class="less">less<i class="icon-arrow-up"></i></a>',
                speed: 500
            });
            $(".list-relate").addClass("owl-carousel");
            $(".list-relate").addClass("owl-theme");
            $('.list-relate').owlCarousel({
                center: true,
                items:1,
                loop:true,
                margin:0
            });
            $(".equipe .group-member").addClass("owl-carousel");
            $(".equipe .group-member").addClass("owl-theme");
            SlideEquipe();
        }


    });
    $(window).on('resizeend', function () {
        searchhome();
        resizeewidthmap();
        resizeewidthmapAgent();
        setmiddle();
        he_content_home_left();
        GetPaddingBT();
        GetHeightSlider();
    });

    $(window).resize(function(){
        searchhome();
        resizeewidthmap();
        resizeewidthmapAgent();
        setmiddle();
        he_content_home_left();
        GetPaddingBT();
        GetHeightSlider();
    });

    $(window).on('load', function () {
        GetHeightSlider();
    });

})(jQuery);
