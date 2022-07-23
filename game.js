const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("game-screen"));

const ctx =  canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(200, 40, 100, 200);

