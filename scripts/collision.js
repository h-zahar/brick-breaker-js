export const defaultCollision = (gameWidth, gameHeight, ball) => {
    const leftBar = 0;
    const rightBar = gameWidth;
    const topRoof = gameHeight + (ball.size.y / 2);
    const ground = 0;

    let actualXPosition = ball.position.x;
    let actualYPosition = ball.position.y;

    let relativeXPosition = ball.position.x + ball.size.x;
    let relativeYPosition = ball.position.y + ball.size.y;

    if (relativeXPosition >= rightBar || actualXPosition <= leftBar) {
        ball.speed.x = -ball.speed.x;
    }

    if (relativeYPosition >= topRoof) {
        // ball.setGameState(2);
        ball.reset();
    }

    if (actualYPosition <= ground) {
        ball.speed.y = -ball.speed.y;
    }
};

export const isCollision = (ball, gameObject) => {
    // console.log(gameHeight, gameWidth, ball.position, gameObject.position);
    // if (!gameObject?.paddle) console.log(gameObject);

    let actualXPosition = ball.position.x;
    let actualYPosition = ball.position.y;

    let relativeXPosition = ball.position.x + ball.size.x;
    let relativeYPosition = ball.position.y + ball.size.y;
    
    let leftXLimit = gameObject.position.x;
    let rightXLimit = gameObject.position.x + gameObject.width;

    let collisionUpYPoint = gameObject.position.y;

    let collisionBottomYPoint = gameObject.position.y + gameObject.height;

    if (((relativeYPosition >= collisionUpYPoint && actualYPosition <= collisionBottomYPoint) && (actualYPosition <= collisionBottomYPoint && relativeYPosition && collisionBottomYPoint)) && (actualXPosition >= leftXLimit && relativeXPosition <= rightXLimit)) {
        return true;
    } else {
        return false;
    }
};