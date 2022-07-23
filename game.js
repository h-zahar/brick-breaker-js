import Paddle from "./paddle.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));

const ctx =  canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

const objPaddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

objPaddle.draw(ctx);