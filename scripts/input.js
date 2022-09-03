export default class InputHandler {
    constructor(obj, game) {
        document.addEventListener("keydown", event => {
          console.log(event.key)
          if (event.key === "ArrowLeft") {
            obj.paddle.moveLeft();
          } 
          if (event.key === "ArrowRight") {
            obj.paddle.moveRight();
          } 
        });

        document.addEventListener("keyup", event => {
            if (event.key === "ArrowLeft") {
                if (obj.paddle.speed < 0)
                obj.paddle.stop();
            }
            if (event.key === "ArrowRight") {
                if (obj.paddle.speed > 0)
                obj.paddle.stop();
            }
            if (event.key === "Escape") {
              obj.gameState = obj.gameState === game.PAUSED ? game.RUNNING : game.PAUSED;
            }
            if (event.key === " ") {
              obj.gameState = obj.gameState === game.MENU ? game.RUNNING : obj.gameState;
            }
        });

    }
}