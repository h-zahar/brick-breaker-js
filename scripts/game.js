import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Bricks from "./brick.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

export default class GameManager {
    constructor(gameWidth, gameHeight) {
        this.game = {
            width: gameWidth,
            height: gameHeight
        };
    }

    start() {
        this.gameState = GAMESTATE.RUNNING;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.brick = new Bricks(this);
        this.objs = [this.paddle, this.ball, this.brick];

        new InputHandler(this, GAMESTATE);
    }
    
    draw(/** @type {CanvasRenderingContext2D} */ ctx) {

        if (this.gameState === GAMESTATE.PAUSED) {
            // ctx.rect(0, 0, this.game.width, this.game.height);
            // ctx.fillStyle = "rgba(144, 144, 144, 0.5)";
            // ctx.fill();  
            
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused!", this.game.width / 2, this.game.height / 2);
        }

        this.objs.forEach(elem => {
            elem?.draw ? elem.draw(ctx)
            : null;
        });

    }

    update(deltaTime) {

        if (this.gameState === GAMESTATE.RUNNING) {
            this.objs.forEach(elem => {
                elem?.update ? elem.update(deltaTime)
                : null;
            });
        }
        if (this.gameState === GAMESTATE.PAUSED) {
            // this.draw();
        }
    }
}