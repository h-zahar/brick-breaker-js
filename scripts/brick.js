import { collusion } from "./collusion.js";
import { levels } from "./levels.js";
const level = levels?.level1;

export default class Brick {
    constructor(frame) {
        // this.paddle = frame.paddle;
        this.brick = document.getElementById("brick");
        this.gameWidth = frame.game.width;
        this.gameHeight = frame.game.height;
        this.ball = frame.ball;

        this.offset = 0;

        this.speed = {
            x: 40,
            y: 40
        }

        this.width = (this.gameWidth - (this.offset * (level[0].length + 1))) / (level[0].length);

        this.height = 20;

        this.position = {
            x: this.offset,
            y: this.offset
        };
    }

    draw(/** @type {CanvasRenderingContext2D} */ ctx) {
        for ( let i = 0; i < level.length; i++) {
            for (let j = 0; j < level[i].length; j++) {
                level[i][j] ? ctx.drawImage(
                    this.brick, 
                    this.position.x + (j * (this.width + this.offset)), 
                    this.position.y + (i * (this.height + this.offset)), 
                    this.width, 
                    this.height
                ) : null;
            }
        }
    }

    // update(deltaTime) {

        // for ( let i = 0; i < level.length; i++) {
        //     for (let j = 0; j < level[i].length; j++) {
        //         level[i][j] ? collusion(
        //             this.gameWidth,
        //             this.gameHeight,
        //             this.ball,
        //             {
        //                 position: {
        //                     x: this.position.x + (j * (this.width + this.offset)), 
        //                     y: this.position.y + (i * (this.height + this.offset)), 
        //                 },
        //                 width: this.width, 
        //                 height: this.height
        //             }
        //         ) : null;
        //     }
        // }
    // }
};