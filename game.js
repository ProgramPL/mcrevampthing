//Define the world size
const WORLD_SIZE = 10;

//Create the world
let world = [];
for (let x = 0; x < WORLD_SIZE; x++) {
    let column = [];
    for (let y = 0; y < WORLD_SIZE; y++) {
        let block = {
            type: 'grass'
        };
        column.push(block);
    }
    world.push(column);
}

//Define the player
let player = {
    x: 0,
    y: 0
};

//Function to move the player
function movePlayer(direction) {
    switch (direction) {
        case 'up':
            player.y--;
            break;
        case 'down':
            player.y++;
            break;
        case 'left':
            player.x--;
            break;
        case 'right':
            player.x++;
            break;
    }
}

//Function to get the block type at a given position
function getBlockAtPos(x, y) {
    return world[x][
