"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Point } from "./point"
var Canvas = (function () {
    function Canvas() {
        this.canvas = document.getElementById("canvas");
        this.canvasText = this.canvas.getContext("2d");
        this.pointNumber = 100;
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.drawPoint();
    }
    Canvas.prototype.drawPoint = function () {
        for (var i = 0; i++; i < this.pointNumber) {
            var point = new Point(this.canvasText);
            this.points.push(point);
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;
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
//# sourceMappingURL=canvas.js.map