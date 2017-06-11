"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(ctx) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.sx = Math.random() * 2;
        this.sy = Math.random() * 2;
        this.r = Math.random() * 2;
        this.draw(ctx);
    }
    Point.prototype.draw = function (ctx) {
        ctx.beginPath();
    };
    return Point;
}());
exports.Point = Point;
