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

    function Typography() {}

    return Typography;
});

require([
    'blocks/radio-button/radio-button',
    'blocks/typography/typography'
], function (RadioButton, Typography) {
});
