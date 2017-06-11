

// import { Point } from "./point"
export class Canvas {
    canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
    canvasText = this.canvas.getContext("2d")
    height: number
    width: number
    pointNumber: number
    points: Point[]
    constructor() {
        this.pointNumber = 100
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.drawPoint()
    }


    private drawPoint() {
        for (let i = 0; i++; i < this.pointNumber) {
            let point = new Point(this.canvasText)
            this.points.push(point)
        }
    }
}


export class Point {
    x: number
    y: number
    sx: number
    sy: number
    rate: number
    r: number
    constructor(ctx: CanvasRenderingContext2D) {
        this.rate = 1
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.sx = Math.random() * this.rate
        this.sy = Math.random() * this.rate
        this.r = Math.random() * 2
        this.draw(ctx)
    }

    private draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = '#aaa'
        ctx.fill()
    }
}