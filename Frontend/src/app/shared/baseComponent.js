"use strict";
exports.__esModule = true;
exports.BaseComponent = void 0;
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.isBusy = 0;
    }
    BaseComponent.prototype.decrementIsBusy = function () {
        this.isBusy--;
    };
    BaseComponent.prototype.incrementIsBusy = function () {
        this.isBusy++;
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
