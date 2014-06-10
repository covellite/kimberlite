(function ($) {
    'use strict';

    $.fn.kimberlite = function (o) {
        var d = {
            scrollPoint: 200,
            scrollSpeed: 600,
            displaySpeed: 100,
            showBottom: "20px",
            hideBottom: "-200px"
        },
            fo = $.extend({}, d, o);

        return this.each(function () {
            var pagetop = $(this);
            $(window).scroll(function(e) {
                if ($(this).scrollTop() >= fo.scrollPoint) {
                    pagetop
                        .animate({
                            bottom: fo.showBottom
                        },fo.displaySpeed);
                } else {
                    pagetop
                        .animate({
                            bottom: fo.hideBottom
                        },fo.displaySpeed);
                }
            });

            pagetop
                .click(function (e) {
                    $('body')
                        .animate({
                            scrollTop: 0
                        }, fo.scrollSpeed, function() {
                            console.log(1);
                            $(this)
                                .animate({
                                    bottom: fo.hideBottom
                                },0);
                        });
                    e.preventDefault();
                });
        });

    };

}(jQuery));
