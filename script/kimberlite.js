;(function ($) {
    'use strict';

    $.fn.kimberlite = function (o) {
        var d = {
            displayPoint: 200,
            scrollSpeed: 1000,
            displaySpeed: 100,
            showBottom: "20px",
            hideBottom: "-200px",
            flag: false
        },
            fo = $.extend({}, d, o);

        return this.each(function () {
            var pagetop = $(this);
            $(window).scroll(function () {
                if ($(this).scrollTop() > fo.displayPoint) {
                    if (!fo.flag) {
                        fo.flag = true;
                        pagetop
                            .animate({
                                bottom: fo.showBottom
                            }, fo.displaySpeed);
                    }
                } else {
                    if (fo.flag) {
                        fo.flag = false;
                        pagetop
                            .animate({
                                bottom: fo.hideBottom
                            }, fo.displaySpeed);
                    }
                }
            });

            pagetop
                .click(function (e) {
                    $('html,body')
                        .animate({
                            scrollTop: 0
                        }, fo.scrollSpeed);
                    e.preventDefault();
                });
        });

    };

}(jQuery));
