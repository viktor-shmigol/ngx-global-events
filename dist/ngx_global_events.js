import { Injectable } from '@angular/core';
var NgxGlobalEvents = /** @class */ (function () {
    function NgxGlobalEvents() {
        this._channels = [];
    }
    NgxGlobalEvents.prototype.subscribe = function (topic) {
        var _this = this;
        var handlers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            handlers[_i - 1] = arguments[_i];
        }
        if (!this._channels[topic]) {
            this._channels[topic] = [];
        }
        handlers.forEach(function (handler) {
            _this._channels[topic].push(handler);
        });
    };
    NgxGlobalEvents.prototype.unsubscribe = function (topic, handler) {
        var t = this._channels[topic];
        if (!t) {
            return false;
        }
        if (!handler) {
            delete this._channels[topic];
            return true;
        }
        var i = t.indexOf(handler);
        if (i < 0) {
            return false;
        }
        t.splice(i, 1);
        if (!t.length) {
            delete this._channels[topic];
        }
        return true;
    };
    NgxGlobalEvents.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var t = this._channels[topic];
        if (!t) {
            return null;
        }
        var responses = [];
        t.forEach(function (handler) {
            responses.push(handler.apply(void 0, args));
        });
        return responses;
    };
    NgxGlobalEvents.decorators = [
        { type: Injectable },
    ];
    return NgxGlobalEvents;
}());
export { NgxGlobalEvents };
//# sourceMappingURL=ngx_global_events.js.map