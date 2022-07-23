export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.offset = 10;

        this.speed = {
            x: 20,
            y: 20
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

    draw(/** @type {CanvasRenderingContext2D} */ ctx, ball) {
        ctx.drawImage(ball, this.position.x, this.position.y, this.size.y, this.size.x);
    }

    update(deltaTime) {
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;

        if (this.position.x + this.size.x >= this.gameWidth || this.position.x <= 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.size.y >= this.gameHeight || this.position.y <= 0) {
            this.speed.y = -this.speed.y;
        }
    }
}