(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-21201176-2','auto');ga('send','pageview');

console.log('aaaaaa')

define([
    'jquery'
], function ($) {
    'use strict';

    function RadioButton() {}

    return RadioButton;
});

define([
    'jquery'
], function ($) {
    'use strict';

    function Typography() {
        this.$block = $('.typography');

        return this;
    }

    Typography.prototype._getElem = function(name) {
        return {
            axis: this.$block.find('.typography__axis'),
            radio: this.$block.find('.typography__radio')
        }[name] || null;
    };

    return Typography;
});

require([
    'blocks/typography/typography'
], function (Typography) {
    var typography = new Typography();
});
