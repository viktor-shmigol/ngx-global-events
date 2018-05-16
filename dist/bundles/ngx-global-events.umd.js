(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global['ngx-global-events'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
            { type: core.Injectable },
        ];
        return NgxGlobalEvents;
    }());

    var NgxGlobalEventsModule = /** @class */ (function () {
        function NgxGlobalEventsModule() {
        }
        NgxGlobalEventsModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            NgxGlobalEvents
                        ]
                    },] },
        ];
        return NgxGlobalEventsModule;
    }());

    exports.NgxGlobalEvents = NgxGlobalEvents;
    exports.NgxGlobalEventsModule = NgxGlobalEventsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
