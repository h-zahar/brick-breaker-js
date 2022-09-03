export default class Paddle {
    constructor(frame) {
        this.gameWidth = frame.game.width;
        this.gameHeight = frame.game.height;

        this.width = 170;
        this.height = 10;

        this.offset = 10;

        this.position = {
            x: (this.gameWidth / 2) - (this.width / 2),
            y: this.gameHeight - this.height - this.offset
        };
        
        this.maxSpeed = 60;
        this.speed = 0;
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        ctx.fillStyle = "#1a1a86";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        this.position.x += this.speed / deltaTime;

        if (this.position.x + this.width >= this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }

        if (this.position.x <= 0) {
            this.position.x = 0;
        }

        // if (this.speed < 0) {

        // }
        // if (this.speed > 0) {

        // }
    }
}