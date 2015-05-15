;(function($) {
    $.fn.toggleClick = function() {
        var functions = arguments;
        return this.each(function() {
            var iteration = 0;
            $(this).click(function() {
                functions[iteration].apply(this, arguments);
                iteration = (iteration + 1) % functions.length;
            })
        })
    }
})(jQuery);
