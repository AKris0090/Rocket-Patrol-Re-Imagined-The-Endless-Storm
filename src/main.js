/* 
Name: Arjun Krishnan
Mod Title: Rocket Patrol Re-imagined: The Endless Storm
Time: 6.5 hrs
Mods:
    - DONE: Timing/Scoring mechanism, where successful hits add to timer. Different time values for each ship (5 pts)
    - DONE: Particle emitter for particle explosion when rocket hits a spaceship (5 pts)
    - DONE: Mouse control for player movement and mouse click to fire (5 pts)
    - DONE: Display the remaining time on screen (3 pts)
    - DONE: Allow the player to control the rocket after its fired (1 pt)
    - Create a new scrolling tile sprite for the background
Citations:
    - Phaser 3 Sandbox: https://labs.phaser.io/edit.html?src=src/game%20objects/particle%20emitter/explode%20emitter.js&v=3.60.0
                        https://labs.phaser.io/edit.html?src=src/input/mouse/mouse%20down.js&v=3.60.0
                        https://stackoverflow.com/questions/28104605/how-to-find-the-mouse-position-x-y-using-phaser
    - Explosion json: https://github.com/photonstorm/phaser3-examples/blob/master/public/assets/particles/explosion.json
    - Explosion png: https://github.com/photonstorm/phaser3-examples/blob/master/public/assets/particles/explosion.png
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let emitter = null;