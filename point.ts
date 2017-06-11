export class Point {
    x: number
    y: number
    sx: number
    sy: number
    r: number
    constructor(ctx: CanvasRenderingContext2D) {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.sx = Math.random() * 2
        this.sy = Math.random() * 2
        this.r = Math.random() * 2
        this.draw(ctx)
    }

    private draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()

    }


}