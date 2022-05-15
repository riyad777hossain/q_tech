(function($) {
    "use strict";

    $(document).ready(function() {

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-----------------------------------------
            Global slick slicer control
        ------------------------------------------*/
        var globalSlickInit = $('.global-slick-init');
        if (globalSlickInit.length > 0) {
            //todo have to check slider item 
            $.each(globalSlickInit, function(index, value) {
                if ($(this).children('div').length > 1) {
                    //todo configure slider settings object
                    var sliderSettings = {};
                    var allData = $(this).data();
                    var infinite = typeof allData.infinite == 'undefined' ? false : allData.infinite;
                    var arrows = typeof allData.arrows == 'undefined' ? false : allData.arrows;
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var focusOnSelect = typeof allData.focusonselect == 'undefined' ? false : allData.focusonselect;
                    var swipeToSlide = typeof allData.swipetoslide == 'undefined' ? false : allData.swipetoslide;
                    var slidesToShow = typeof allData.slidestoshow == 'undefined' ? 1 : allData.slidestoshow;
                    var slidesToScroll = typeof allData.slidestoscroll == 'undefined' ? 1 : allData.slidestoscroll;
                    var speed = typeof allData.speed == 'undefined' ? '500' : allData.speed;
                    var dots = typeof allData.dots == 'undefined' ? false : allData.dots;
                    var cssEase = typeof allData.cssease == 'undefined' ? 'linear' : allData.cssease;
                    var prevArrow = typeof allData.prevarrow == 'undefined' ? '' : allData.prevarrow;
                    var nextArrow = typeof allData.nextarrow == 'undefined' ? '' : allData.nextarrow;
                    var centerMode = typeof allData.centermode == 'undefined' ? false : allData.centermode;
                    var centerPadding = typeof allData.centerpadding == 'undefined' ? false : allData.centerpadding;
                    var rows = typeof allData.rows == 'undefined' ? 1 : parseInt(allData.rows);
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var autoplaySpeed = typeof allData.autoplayspeed == 'undefined' ? 2000 : parseInt(allData.autoplayspeed);
                    var lazyLoad = typeof allData.lazyload == 'undefined' ? false : allData.lazyload; // have to remove it from settings object if it undefined
                    var appendDots = typeof allData.appenddots == 'undefined' ? false : allData.appenddots;
                    var appendArrows = typeof allData.appendarrows == 'undefined' ? false : allData.appendarrows;
                    var asNavFor = typeof allData.asnavfor == 'undefined' ? false : allData.asnavfor;
                    var fade = typeof allData.fade == 'undefined' ? false : allData.fade;
                    var rtl = typeof allData.rtl == 'undefined' ? false : allData.rtl;
                    var responsive = typeof $(this).data('responsive') == 'undefined' ? false : $(this).data('responsive');
                    //slider settings object setup
                    sliderSettings.infinite = infinite;
                    sliderSettings.arrows = arrows;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.focusOnSelect = focusOnSelect;
                    sliderSettings.swipeToSlide = swipeToSlide;
                    sliderSettings.slidesToShow = slidesToShow;
                    sliderSettings.slidesToScroll = slidesToScroll;
                    sliderSettings.speed = speed;
                    sliderSettings.dots = dots;
                    sliderSettings.cssEase = cssEase;
                    sliderSettings.prevArrow = prevArrow;
                    sliderSettings.nextArrow = nextArrow;
                    sliderSettings.rows = rows;
                    sliderSettings.autoplaySpeed = autoplaySpeed;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.rtl = rtl;
                    if (centerMode != false) {
                        sliderSettings.centerMode = centerMode;
                    }
                    if (centerPadding != false) {
                        sliderSettings.centerPadding = centerPadding;
                    }
                    if (lazyLoad != false) {
                        sliderSettings.lazyLoad = lazyLoad;
                    }
                    if (appendDots != false) {
                        sliderSettings.appendDots = appendDots;
                    }
                    if (appendArrows != false) {
                        sliderSettings.appendArrows = appendArrows;
                    }
                    if (asNavFor != false) {
                        sliderSettings.asNavFor = asNavFor;
                    }
                    if (fade != false) {
                        sliderSettings.fade = fade;
                    }
                    if (responsive != false) {
                        sliderSettings.responsive = responsive;
                    }
                    $(this).slick(sliderSettings);
                }
            });
        }

        /*
        ========================================
            Faq Accordion
        ========================================
        */

        $(document).on('click', '.faq-contents .faq-title', function(e) {
            var items = $(this).parent('.faq-item');
            if (items.hasClass('open')) {
                items.removeClass('open');
                items.find('.faq-panel').slideUp(300, "swing");
            } else {
                items.addClass('open');
                items.children('.faq-panel').slideDown(300, "swing");
                items.siblings('.faq-item').removeClass('open');
                items.siblings('.faq-item').find('.faq-panel').slideUp(300, "swing");
            }
        });


        /*-------------------------------
            Sidebar Product Menu
        ------------------------------*/

        $(document).on('click', '.product-lists .menu-item-has-children a', function(e) {
            var element = $(this).parent('.menu-item-has-children');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('.submenu').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('.submenu').slideDown(300, "swing");
                element.siblings('.menu-item-has-children').children('.submenu').slideUp(300, "swing");
                element.siblings('.menu-item-has-children').removeClass('open');
            }
        });

        /*-------------------------------
            Sidebar Product Open Close
        ------------------------------*/

        $(document).on('click', '.product-left-title .title', function(e) {
            var element = $(this).parent('.product-left-title');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('.product-left-list').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('.product-left-list').slideDown(300, "swing");
                element.siblings('.product-left-title').children('.product-left-list').slideUp(300, "swing");
                element.siblings('.product-left-title').removeClass('open');
            }
        });

        /*-----------------
            Nice Select
        ------------------*/

        $('select').niceSelect();

        /* 
        ========================================
            Navbar Toggler button
        ========================================
        */

        $(document).on('click', '.navbar-toggler', function() {
            $(".navbar-toggler-icon").toggleClass("active");
        });


        $(document).on('click', '.show-nav-right-contents', function() {
            $(".nav-right-content").toggleClass("active");
        });

        /*-------------------------------
            Category Toggle Class
        ------------------------------*/
        $(document).on('click', '.top-menu-toggle', function() {
            $(".navbar-area-side").toggleClass("active");
        });

        /* 
        ========================================
            Tab
        ========================================
        */

        $(document).on('click', 'ul.tabs li', function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('active');
            $('.tab-custom-content').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

        /* 
        ========================================
            Pagination 
        ========================================
        */

        $(document).on('click', '.payment-card .single-card', function() {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });
        /* 
        ========================================
            Payment Card 
        ========================================
        */

        $(document).on('click', '.custom-pagination li', function() {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
        });

        /*-----------------
            Lazy Load Js
        ------------------*/

        $('.lazyloads').Lazy();

        /* 
        ----------------------------------------
            Filter Select Category
        ----------------------------------------
        */

        $(document).on('click', '.filter-list-category .filter-select', function() {
            $(this).toggleClass('check-active');
        });

        /* 
        ----------------------------------------
            Badge List Menu
        ----------------------------------------
        */

        $(document).on('click', '.badge-list-two li', function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });


        /*
        ========================================
        counter odometer
        ========================================
        */

        $(".counter-count").each(function() {
            $(this).isInViewport(function(status) {
                if (status === "entered") {
                    for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                        var el = document.querySelectorAll('.odometer')[i];
                        el.innerHTML = el.getAttribute("data-odometer-final");
                    }
                }
            });
        });

        /*----------------------
            Isotope
        -----------------------*/

        $('.imageloaded').imagesLoaded(function() {
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
            $('.isootope-button').on('click', '.list', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        });

        /* 
        ========================================
            Product Quantity js
        ========================================
        */

        $(function() {

            $('<span class="plus"><i class="las la-plus"></i></span>').insertAfter('.product-quantity .quantity-input');
            $('<span class="substract"><i class="las la-minus"></i></span>').insertBefore('.product-quantity .quantity-input');

            $(document).on('click', '.plus', function() {
                var selectedInput = $(this).prev('.quantity-input');
                if (selectedInput.val() < 50) {
                    selectedInput[0].stepUp(1);
                }
            });
            $(document).on('click', '.substract', function() {
                var selectedInput = $(this).next('.quantity-input');
                if (selectedInput.val() > 1) {
                    selectedInput[0].stepDown(1);
                }
            });

        });

        /* 
        ========================================
            Click Active Class Sidebar
        ========================================
        */

        $(document).on('click', '.active-list .list', function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        /* 
        ========================================
            Cart Click Loading
        ========================================
        */

        $(document).on('click', '.cart-loading', function() {
            $(this).addClass('active-loading')
            setTimeout(function() {
                $('.cart-loading').removeClass('active-loading');
            }, 1500);
        });


        /* 
        ========================================
            Cart Click Close
        ========================================
        */

        $(document).on('click', '.close-table-cart', function() {
            $(this).parent().parent().hide(100);
        });

        $(document).on('click', '.btn-clear', function() {
            $('.table-cart-clear').hide(500);
        });
        $(document).on('click', '.btn-update', function() {
            $('.table-cart-clear').show(1000);
            $('.close-table-cart').parent().parent().show(500);
        });


        /* 
        ========================================
            Addto-Cart Click Close 
        ========================================
        */

        $(document).on('click', '.close-cart', function() {
            $(this).parent().hide(100);
        });

        /* 
        ========================================
            Click Open SignIn SignUp
        ========================================
        */

        $(document).on('click', '.click-open-form', function() {
            $('.checkout-form-open').toggleClass('active');
        });

        $(document).on('click', '.click-open-form2', function() {
            $(this).toggleClass('active');
            $('.checkout-signup-form-wrapper').toggleClass('active');
        });

        $(document).on('click', '.click-open-form3', function() {
            $(this).toggleClass('active');
            $('.checkout-address-form-wrapper').toggleClass('active');
        });

        /* 
        ========================================
            Left Responsive Sidebar
        ========================================
        */
        $(document).on('click', '.close-bars, .sidebar-overlay', function() {
            $('.product-close, .product-close-main, .sidebar-overlay').removeClass('active');
        });
        $(document).on('click', '.sidebar-icon', function() {
            $('.product-close, .product-close-main, .sidebar-overlay').addClass('active');
        });


        /* 
        ========================================
            Dashboard Responsive Sidebar
        ========================================
        */

        $(document).on('click', '.close-bars, .body-overlay', function() {
            $('.dashboard-close, .dashboard-close-main, .body-overlay').removeClass('active');
        });
        $(document).on('click', '.sidebar-icon', function() {
            $('.dashboard-close, .dashboard-close-main, .body-overlay').addClass('active');
        });

        /*----------------------
            Range Slider
        -----------------------*/

        var i = document.querySelector(".ui-range-slider");
        if (void 0 !== i && null !== i) {
            var j = parseInt(i.parentNode.getAttribute("data-start-min"), 10),
                k = parseInt(i.parentNode.getAttribute("data-start-max"), 10),
                l = parseInt(i.parentNode.getAttribute("data-min"), 10),
                m = parseInt(i.parentNode.getAttribute("data-max"), 10),
                n = parseInt(i.parentNode.getAttribute("data-step"), 10),
                o = document.querySelector(".ui-range-value-min span"),
                p = document.querySelector(".ui-range-value-max span"),
                q = document.querySelector(".ui-range-value-min input"),
                r = document.querySelector(".ui-range-value-max input");
            noUiSlider.create(i, {
                start: [j, k],
                connect: !0,
                step: n,
                range: {
                    min: l,
                    max: m
                }
            }), i.noUiSlider.on("update", function(a, b) {
                var c = a[b];
                b ? (p.innerHTML = Math.round(c), r.value = Math.round(c)) : (o.innerHTML = Math.round(c), q.value = Math.round(c))
            })
        }


        /*------------------------------
            Clients Product hover show hide
         * ----------------------------*/

        $(document).on('mouseout', '.single-client-items', function(e) {
            $(this).find('.client-hover-item').remove();
        });
        $(document).on('mouseover', '.single-client-items', function(e) {
            $(this).append('<div class="client-hover-item radius-10">' +
                '<div class="client-hover-contents">' +
                '<div class="clients-hover-img radius-10">' +
                '<img class="radius-10" src="' + $(this).data('imgsrc') + '" alt="">' +
                '</div><h4 class="common-title mt-4">  ' + $(this).data('title') + ' </h4>' +
                '<span class="author-clients mt-2"> ' + $(this).data('price') + '</span></div></div>');
        });

        /*------------------
            back to top
        ------------------*/

        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 300);
        });

    });


    /*------------------
        back to top
    ------------------*/

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 100) {
            ScrollTop.fadeIn();
        } else {
            ScrollTop.fadeOut();
        }
    });


})(jQuery);