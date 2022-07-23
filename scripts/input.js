export default class InputHandler {
    constructor(objPaddle) {
        document.addEventListener("keydown", event => {
          if (event.key === "ArrowLeft") {
            objPaddle.moveLeft();
          } 
          if (event.key === "ArrowRight") {
            objPaddle.moveRight();
          } 
        });

        document.addEventListener("keyup", event => {
            if (event.key === "ArrowLeft") {
                if (objPaddle.speed < 0)
                objPaddle.stop();
            }
            if (event.key === "ArrowRight") {
                if (objPaddle.speed > 0)
                objPaddle.stop();
            }
        });

    }
}