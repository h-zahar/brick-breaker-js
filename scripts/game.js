import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Bricks from "./brick.js";
import { levels } from "./levels.js";

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
        this.gameState = GAMESTATE.MENU;
        this.setGameState = (option) => {
            this.gameState = option;
        };
        this.levels = levels;

        this.reset = () => {
            this.ball.speed.x = 0;
            this.ball.speed.y = 0;

            this.ball.position.x = this.ball.position.x;
            this.ball.position.y = this.ball.position.y - (this.ball.size / 2) - 20;
            
            location.reload();
        };
    }

    start() {
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

        if (this.gameState === GAMESTATE.MENU) {
            ctx.fillStyle = "rgba(144, 144, 144, 0.5)";
            ctx.fillRect(0, 0, this.game.width, this.game.height);
            
            ctx.font = "25px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Press Spacebar to Start!", this.game.width / 2, this.game.height / 2);

            ctx.font = "18px Arial";
            ctx.fillText("Esc to Pause Anytime!", this.game.width / 2, (this.game.height / 2) + 45);
        }

        this.gameState !== GAMESTATE.MENU ? this.objs.forEach(elem => {
            elem?.draw ? elem.draw(ctx)
            : null;
        }) : null;

    }

    update(deltaTime) {

        if (this.gameState === GAMESTATE.RUNNING) {
            this.objs.forEach(elem => {
                elem?.update ? elem.update(deltaTime)
                : null;
            });
        }
    }
}