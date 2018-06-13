(function ($) {
// Mobile to tablet portrait Only JS
    if (matchMedia('(max-width: 1023px)').matches) {

        // Open main-menu
        $('.button__menu-container__open').on(
            'click', function (e) {
                $(this).addClass('open');
                $('html').addClass('menu-mobile--active');
            }
        );

        // Close main-menu
        $('.button__menu-close').on(
            'click', function (e) {
                $('.button__menu-container__open').removeClass('open');
                $('html').removeClass('menu-mobile--active');
            }
        );
    }

//Tablet Landscape to Desktop only JS
//    if (matchMedia('(min-width: 768px) and (orientation:landscape)').matches) {
//        $('.button__menu-open').removeClass('open');
//        $('html').removeClass('menu-mobile--active');
//    }

    $(window).resize(
        function () {

            $('.button__menu-container__open').removeClass('open');
            $('html').removeClass('menu-mobile--active');

            // Open main-menu
            $('.button__menu-container__open').on(
                'click', function (e) {
                    $(this).addClass('open');
                    $('html').addClass('menu-mobile--active');
                }
            );

            // Close main-menu
            $('.button__menu-close').on(
                'click', function (e) {
                    $('.button__menu-container__open').removeClass('open');
                    $('html').removeClass('menu-mobile--active');
                }
            );

        }
    );
})(jQuery);