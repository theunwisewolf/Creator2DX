"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var ImageView = /** @class */ (function (_super) {
    __extends(ImageView, _super);
    function ImageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageView.prototype.Create = function () {
        // TODO: Proper image path
        this.cppString = "auto " + this.name + " = cocos2d::ui::ImageView::create(\"" + "sprites/rect_curved1.png" + "\");\n";
        this.cppString += this.name + "->setScale9Enabled(true);\n";
    };
    ImageView.prototype.setPosition = function (position) {
        this.position = { x: position.x, y: position.y };
        position.x *= this.scaleX;
        position.y *= this.scaleY;
        if (this.parent) {
            this.cppString += this.name + "->setPosition(cocos2d::Vec2(" + position.x;
            this.cppString += " + " + this.parent.name + "->getContentSize().width / 2.0f, " + position.y;
            this.cppString += " + " + this.parent.name + "->getContentSize().height / 2.0f";
            this.cppString += "));\n";
        }
        else {
            this.cppString += this.name + "->setPosition(cocos2d::Vec2(" + position.x + " + this->getParent()->getContentSize().width / 2.0f, " + position.y + " + this->getParent()->getContentSize().height / 2.0f));\n";
        }
    };
    return ImageView;
}(Node_1.Node));
exports.ImageView = ImageView;