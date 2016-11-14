// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.speed = 100;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505) {
            this.x = 0;
        }

   for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x + 65 &&
            player.x + 55 > allEnemies[i].x && player.y < allEnemies[i].y + 40 &&  60 + player.y > allEnemies[i].y) {
            console.log("bateeeeeeeeu!!!");
            player.reset();
        }
    }     
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(100,100);
var enemy2 = new Enemy(80,200);
var enemy3 = new Enemy(120,300);
var allEnemies = [enemy1,enemy2,enemy3,enemy4];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    this.x = 0;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
    if (this.x < 0 ) {
        this.x = 0;
    } else

    if (this.x > 400) {
        this.x = 400;
    } else 

    if (this.y < 0 ) {
        this.y = 400;
        this.x = 0;
    } else

    if (this.y > 400) {
        this.y = 400;
    } 
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


Player.prototype.handleInput = function(direction){
     if (direction == 'left') {
        this.x -= 100;
     } else

     if (direction == 'right') {
        this.x += 100;
     } else

     if (direction == 'up') {
        this.y -= 100;
     } else

     if (direction == 'down') {
        this.y += 100;
     }

     this.checkCollisions();
}

Player.prototype.reset = function(){
    this.x = 0;
    this.y = 400;
}

Player.prototype.checkCollisions = function() {
   console.log(player.x);
   console.log(player.y);
   console.log("posicao x: " + allEnemies[0].x);
   console.log("posicao y: " + allEnemies[0].y);
   console.log("tamanho: "+ allEnemies[0].x + allEnemies[0].width);

   // if (player.x < allEnemies[0].x + allEnemies[0].width) {
   //  console.log("bateu!!!!!!!!!");
   // }
};

var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
