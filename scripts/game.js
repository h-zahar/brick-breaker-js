import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class GameManager {
    constructor(gameWidth, gameHeight) {
        this.game = {
            width: gameWidth,
            height: gameHeight
        };
        
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.objs = [this.paddle, this.ball];

        new InputHandler(this);
    }   

    start(/** @type {CanvasRenderingContext2D} */ ctx, deltaTime) {
        const draw = () => {
            this.objs.forEach(elem => {
                elem.draw(ctx);
            });
        };
        const update = () => {
            this.objs.forEach(elem => {
                elem.update(deltaTime);
            });
        }
        draw();
        update();
    }
}