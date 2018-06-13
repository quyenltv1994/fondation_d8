(function ($) {
    'use strict';
    $(document).ready(function () {
        var iframe = $('.form iframe');
        if (iframe.length) {
            iframe.on('load', function(){
                $.ajax({
                    url: "/themes/main/assets/css/iframe.css",
                    async: false,
                    success: function (data){
                        iframe.contents().find('body').append('<style type="text/css">' + data + '</style>');
                    }
                });
            });

            if ( $(window).width() < 768 ) {
                iframe.css('min-height', 720);
            } else {
                iframe.css('min-height', 660);
            }
        }
    });
})(jQuery);