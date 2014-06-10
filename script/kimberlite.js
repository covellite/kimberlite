(function ($) {
    'use strict';

    $.fn.kimberlite = function (o) {
        var d = {
            child: '#content'
        },
            fo = $.extend({}, d, o);

        return this.each(function () {
            var parent = this;

            $(this).children()
                .click(function (e) {
                    var num = $(parent).children().index(this);
                    $(parent).children()
                       　.removeClass('select');
                   　$(this)
                      　　.addClass('select');
                    $(fo.child).children()
                        .addClass('hide')
                        .eq(num).removeClass('hide');

                    e.preventDefault();
                });

        });
    };

}(jQuery));
