// import { Canvas } from "./canvas"


class Point {
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
        this.r = Math.random() * 2 + 1
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fillStyle = '#aaa'
        ctx.fill()
        ctx.closePath()
    }

    public move() {
        this.x += this.sx
        this.y += this.sy
        if (this.x > window.innerWidth) this.sx = -Math.abs(this.sx)
        else if (this.x < 0) this.sx = Math.abs(this.sx)
        if (this.y > window.innerHeight) this.sy = -Math.abs(this.sy)
        else if (this.y < 0) this.sy = Math.abs(this.sy)
    }

    public drawLine(ctx, p: Point) {
        var dx = this.x - p.x
        var dy = this.y - p.y
        var d = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) {
            var alpha = (100 - d) / 100 * 1
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(p.x, p.y)
            ctx.closePath()
            ctx.strokeStyle = 'rgba(170, 170, 170, ' + alpha + ')'
            ctx.strokeWidth = 1
            ctx.stroke()
        }
    }


}


class Canvas {
    canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
    canvasText = this.canvas.getContext("2d")
    height: number = window.innerHeight
    width: number = window.innerWidth
    pointNumber: number
    points: Point[] = []
    constructor() {
        this.pointNumber = 120
        this.canvas.height = this.height
        this.canvas.width = this.width
        this.drawPoint()
    }


    private drawPoint() {
        for (let i = 0; i < this.pointNumber; i++) {
            let point = new Point(this.canvasText)
            point.draw(this.canvasText)
            this.points.push(point)
        }
    }

    public paint() {
        this.canvasText.clearRect(0, 0, this.width, this.height)
        for (let i = 0; i < this.pointNumber; i++) {
            this.points[i].move()
            this.points[i].draw(this.canvasText)
            for (let j = i + 1; j < this.pointNumber; j++) {
                this.points[i].drawLine(this.canvasText, this.points[j])
            }
        }
    }
}


let canvas = new Canvas()

window.addEventListener("load", () => {
    loop()
})

window.requestAnimationFrame((callback) => {
    setTimeout(callback, 1000 / 60)
})

function loop() {
    window.requestAnimationFrame(loop)
    canvas.paint()
}

// window.addEventListener('load', loop())
// window.addEventListener('resize', function () {
//     w = canvas.width = canvas.offsetWidth
//     h = canvas.height = canvas.offsetHeight
// })

