define([
    'jquery'
], function ($) {
    'use strict';

    function Typography() {
        var _this = this;
        this.$block = $('.typography');

        this._getElem('control').click(function () {
            _this._activateAxis($('.typography__axis_type_' + $(this).val()));
        });

        return this;
    }

    Typography.prototype._getElem = function(name) {
        return {
            axis: this.$block.find('.typography__axis'),
            control: this.$block.find('.typography__control')
        }[name] || null;
    };

    Typography.prototype._disactivateAxis = function() {
        this._getElem('axis').removeClass('typography__axis_active');

        return this;
    };

    Typography.prototype._activateAxis = function($axis) {
        this._disactivateAxis();

        $axis.addClass('typography__axis_active');

        return this;
    };

    return Typography;
});
