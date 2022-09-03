import { collusion } from "./collusion.js";

export default class Ball {
    constructor(frame) {
        this.paddle = frame.paddle;
        this.ball = document.getElementById("ball");
        this.gameWidth = frame.game.width;
        this.gameHeight = frame.game.height;
        this.offset = 85;

        this.speed = {
            x: 40,
            y: 40
        }

        this.size = {
            x: 20,
            y: 20
        };

        this.position = {
            x: this.size.x + this.offset,
            y: this.size.y + this.offset
        };
    }

    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        ctx.drawImage(this.ball, this.position.x, this.position.y, this.size.y, this.size.x);
    }

    update(deltaTime) {
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;

        collusion(this.gameWidth, this.gameHeight, this, this.paddle);
    }
}