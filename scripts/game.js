import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class GameManager {
    constructor(gameWidth, gameHeight) {
        this.game = {
            width: gameWidth,
            height: gameHeight
        };
    }   

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.objs = [this.paddle, this.ball];

        new InputHandler(this);
    }
    
    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        this.objs.forEach(elem => {
            elem.draw(ctx);
        });
    }

    update(deltaTime) {
        this.objs.forEach(elem => {
            elem.update(deltaTime);
        });
    }
}