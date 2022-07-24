export default class Ball {
    constructor(frame) {
        this.paddle = frame.paddle;
        this.ball = document.getElementById("ball");
        this.gameWidth = frame.game.width;
        this.gameHeight = frame.game.height;
        this.offset = 10;

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

        const leftBar = 0;
        const rightBar = this.gameWidth;
        const topRoof = this.gameHeight;
        const ground = 0;

        let actualXPosition = this.position.x;
        let actualYPosition = this.position.y;

        let relativeXPosition = this.position.x + this.size.x;
        let relativeYPosition = this.position.y + this.size.y;
        
        let leftXLimit = this.paddle.position.x;
        let rightXLimit = this.paddle.position.x + this.paddle.width;

        let collusionYPoint = this.paddle.position.y

        if (relativeXPosition >= rightBar || actualXPosition <= leftBar) {
            this.speed.x = -this.speed.x;
        }

        if (relativeYPosition >= collusionYPoint && (actualXPosition >= leftXLimit && actualXPosition <= rightXLimit)) {
            this.speed.y = -this.speed.y;
        }

        if (relativeYPosition >= topRoof || actualYPosition <= ground) {
            this.speed.y = -this.speed.y;
        }
    }
}