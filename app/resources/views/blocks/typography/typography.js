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
