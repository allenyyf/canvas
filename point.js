"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(ctx) {
        this.rate = 1;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.sx = Math.random() * this.rate;
        this.sy = Math.random() * this.rate;
        this.r = Math.random() * 2;
        this.draw(ctx);
    }
    Point.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = '#aaa';
        ctx.fill();
    };
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.js.map