var Typography = function () {}

Typography.prototype._classes = function (elem) {
    return {
        viewport: 'typography__viewport'
    }[elem];
};

Typography.prototype.getElem = function (elem) {
    return $('.' + this._classes(elem));
};

Typography.prototype.init = function() {
};

(function () {
    var typography = new Typography();
})();
