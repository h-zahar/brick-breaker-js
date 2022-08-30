export default class Brick {
    constructor(frame) {
        // this.paddle = frame.paddle;
        this.brick = document.getElementById("brick");
        this.gameWidth = frame.game.width;
        this.gameHeight = frame.game.height;
        this.offset = 8;

        this.speed = {
            x: 40,
            y: 40
        }

        this.width = 40;
        this.height = 20;

        this.position = {
            x: this.offset,
            y: this.offset
        };
    }

    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        for (let i = 0; i < 10; i++) {
            ctx.drawImage(this.brick, this.position.x + (i * (this.width + this.offset)), this.position.y, this.width, this.height);
        }
    }

    // update() {

    // }
};