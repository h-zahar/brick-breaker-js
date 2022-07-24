export default class InputHandler {
    constructor(obj) {
        document.addEventListener("keydown", event => {
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
        });

    }
}