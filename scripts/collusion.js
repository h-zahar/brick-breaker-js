export const collusion = (gameWidth, gameHeight, ball, gameObject) => {
    console.log(gameHeight, gameWidth, ball.position, gameObject.position);
    const leftBar = 0;
    const rightBar = gameWidth;
    const topRoof = gameHeight;
    const ground = 0;

    let actualXPosition = ball.position.x;
    let actualYPosition = ball.position.y;

    let relativeXPosition = ball.position.x + ball.size.x;
    let relativeYPosition = ball.position.y + ball.size.y;
    
    let leftXLimit = gameObject.position.x;
    let rightXLimit = gameObject.position.x + gameObject.width;

    let collusionUpYPoint = gameObject.position.y;

    let collusionBottomYPoint = gameObject.position.y + gameObject.height;

    if (relativeXPosition >= rightBar || actualXPosition <= leftBar) {
        ball.speed.x = -ball.speed.x;
    }

    if ((relativeYPosition >= collusionUpYPoint && actualYPosition <= collusionBottomYPoint) && (actualYPosition <= collusionUpYPoint) && (actualXPosition >= leftXLimit && actualXPosition <= rightXLimit)) {
        ball.speed.y = -ball.speed.y;
        ball.position.y = gameObject.position.y - ball.size.y;
    }

    if (relativeYPosition >= topRoof || actualYPosition <= ground) {
        ball.speed.y = -ball.speed.y;
    }
};