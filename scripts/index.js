import GameManager from "./game.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));

const ctx =  canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const game = new GameManager(GAME_WIDTH, GAME_HEIGHT)

let lastTime = 0;

const gameLoop = (timeStamp) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.start(ctx, deltaTime);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);