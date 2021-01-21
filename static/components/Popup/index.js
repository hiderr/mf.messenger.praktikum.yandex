"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var templator_js_1 = require("../../utils/templator.js");
var template_js_1 = require("./template.js");
var Block_js_1 = require("../../modules/Block.js");
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        return _super.call(this, "div", props) || this;
    }
    Popup.prototype.render = function () {
        return templator_js_1["default"](template_js_1.template, this["props"]);
    };
    return Popup;
}(Block_js_1["default"]));
exports["default"] = Popup;
