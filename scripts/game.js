import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Bricks from "./brick.js";

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
        this.brick = new Bricks(this);
        this.objs = [this.paddle, this.ball, this.brick];

        new InputHandler(this);
    }
    
    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        this.objs.forEach(elem => {
            elem?.draw ? elem.draw(ctx)
            : null;
        });
    }

    update(deltaTime) {
        this.objs.forEach(elem => {
            elem?.update ? elem.update(deltaTime)
            : null;
        });
    }
}