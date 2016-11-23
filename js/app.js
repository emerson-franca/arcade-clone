//global
var starValue = 0;
var stars = document.getElementById("starValue");
var velocity = 100;
var score = document.getElementById("scoreValue");
var scoreValue = 0;


var bestScore = function(){
    if (starValue > scoreValue) {
        score.innerHTML = starValue;
        scoreValue = starValue;
    }
}


// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.speed = velocity;
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

     checkCollisions();

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var createEnemies = function(){
    var positionsX = [80,20,200,60,150,100];
    var positionsY = [50,55,140,145,220,222];
    var enemy1 = new Enemy(positionsX[Math.floor((Math.random() * 4))],positionsY[Math.floor((Math.random() * 5))]);
    var enemy2 = new Enemy(positionsX[Math.floor((Math.random() * 4))],positionsY[Math.floor((Math.random() * 5))]);
    var enemy3 = new Enemy(positionsX[Math.floor((Math.random() * 4))],positionsY[Math.floor((Math.random() * 5))]);
    allEnemies = [enemy1,enemy2,enemy3]; 
};


createEnemies();


//player function

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

    if (this.y < -10 ) {
        this.y = -10;
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
        this.y -= 90;
     } else

     if (direction == 'down') {
        this.y += 75;
     }

     checkCollisions();
}

Player.prototype.reset = function(){
    this.x = 0;
    this.y = 400;
}


var gameReset = function(){
    alert("Game Over!");
    createHearts();
    starValue = 0;
    stars.innerHTML = starValue;
    allEnemies.forEach(function(enemy) {
        enemy.speed = 100;
    }); 
    velocity = 100;  
};

var checkCollisions = function() {
   for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x + 65 &&
            player.x + 55 > allEnemies[i].x && player.y < allEnemies[i].y + 40 &&  60 + player.y > allEnemies[i].y) {
            console.log("bateeeeeeeeu!!!");
            allHearts.pop();
            if(allHearts.length == 0){
                gameReset();
            }
            player.reset();
        }
    }     
};

// heart function

var Heart = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/Heart.png';
}

Heart.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 50, 70);
}

var createHearts = function(){
  allHearts = [heart1, heart2, heart3];
  
};

//end of heart function


// star function

var Star = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/Star.png';
};

Star.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Star.prototype.update = function() {
      if (player.x < star.x + 65 &&
            player.x + 55 > star.x && player.y < star.y + 40 &&  60 + player.y > star.y) {
            console.log("star!!!");
            star.createStar();
            calculateStars();
            bestScore();
            allEnemies.forEach(function(enemy) {
                enemy.speed =  velocity + 20;
                createEnemies();
             });
            velocity = velocity + 20;
            player.reset();
        }
};

Star.prototype.createStar = function(){
    var positionsX = [0,100,200,300,400];
    var positionsY = [60,220,150];
    this.x = positionsX[Math.floor((Math.random() * 4))];
    this.y = positionsY[Math.floor((Math.random() * 2))];
};

var star = new Star(100,100);

//end of star function



var heart3 = new Heart(350, 520);
var heart2 = new Heart(400, 520);
var heart1 = new Heart(450,520);
allHearts = [heart1, heart2, heart3];
var player = new Player();


//text functions
var calculateStars = function(){
    stars.innerHTML = ++starValue;
};





// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
