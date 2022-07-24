import GameManager from "./game.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));

const ctx =  canvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const game = new GameManager(GAME_WIDTH, GAME_HEIGHT);

const start = () => {
    game.start();
};

let lastTime = 0;

const gameFrame = (timeStamp) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.draw(ctx);
    game.update(deltaTime);

    requestAnimationFrame(gameFrame);
}

start();
requestAnimationFrame(gameFrame);