frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


##Instruções do jogo

O objetivo do jogo é capturar o máximo de estrelas, a cada duas estrelas capturadas a velocidade dos inimigos aumentam, deixando o jogo mais desafiador!


##Instruções técnicas

A função `createEnemies` randomiza os inimigos sempre que pegamos estrela, escolhendo suas posições através de um vetor de posições para x e para y


`Star.prototype.update`

a função checa o caso de colisão do jogador com a estrela, caso ocorra ela cria outra estrela randomicamente utilizando a `createStar` e calcula a quantidade de estrelas que o jogador pegou, logo após ele atualiza o recorde atual do jogador e aumenta a velocidade dos inimigos.