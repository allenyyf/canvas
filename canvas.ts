
import { Point } from "./point"

export class Canvas {
    canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
    canvasText = this.canvas.getContext("2d")
    height: number
    width: number
    points: Point[]
    constructor() {
        this.height = window.innerHeight
        this.width = window.innerWidth
    }


    private drawPoint() {
        this.canvasText.
    }



}