import { defaultCollusion, isCollusion } from "./collusion.js";

export default class Ball {
    constructor(frame) {
        this.paddle = frame.paddle;
        this.ball = document.getElementById("ball");
        this.gameWidth = frame.game.width;
        this.gameHeight = frame.game.height;
        this.offsetX = 350;
        this.offsetY = 200;

        this.speed = {
            x: 55,
            y: 55
        }

        this.size = {
            x: 20,
            y: 20
        };

        this.position = {
            x: this.size.x + this.offsetX,
            y: this.size.y + this.offsetY
        };
    }

    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        ctx.drawImage(this.ball, this.position.x, this.position.y, this.size.y, this.size.x);
    }

    update(deltaTime) {
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;

        defaultCollusion(this.gameWidth, this.gameHeight, this);

        if (isCollusion(this, this.paddle)) {
            this.speed.y = -this.speed.y;

            if (((this.speed.x > 0 && this.paddle.speed > 0) || (this.speed.x < 0 && this.paddle.speed < 0))) {
                this.speed.x = this.speed.x + (this.paddle.speed / 150);
                this.speed.y = this.speed.y + (this.paddle.speed / 100);
            }
            if (!((this.speed.x > 0 && this.paddle.speed > 0) || (this.speed.x < 0 && this.paddle.speed < 0))) {
                this.speed.x = this.speed.x + (this.paddle.speed / 300);
                this.speed.y = this.speed.y - (this.paddle.speed / 200);
            }

            // if (this.paddle.speed === 0) {
            //     this.speed.x = this.speed.x;
            //     this.speed.y = this.speed.y;
            // }

            // console.log(this);
            this.position.y = this.paddle.position.y - this.size.y;
        };
    }
}