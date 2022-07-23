import Paddle from "./paddle.js";
import InputHandler from "./input.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));

const ctx =  canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const objPaddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

objPaddle.draw(ctx);
new InputHandler(objPaddle);

let lastTime = 0;

const gameLoop = (timeStamp = 0) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    objPaddle.update(deltaTime);
    objPaddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();