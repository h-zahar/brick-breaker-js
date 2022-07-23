import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));

const ctx =  canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const objPaddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

objPaddle.draw(ctx);
new InputHandler(objPaddle);

const ball = document.getElementById("ball");

const objBall = new Ball(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

const gameLoop = (timeStamp) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    objPaddle.draw(ctx);
    objPaddle.update(deltaTime);

    objBall.draw(ctx, ball);
    objBall.update(deltaTime);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);