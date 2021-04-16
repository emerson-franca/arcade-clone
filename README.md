
#Link para testar: https://emerson-franca.github.io/arcade-clone/

#Um clone de um clássico dos arcades

##Instruções do jogo

O objetivo do jogo é capturar o máximo de estrelas, a cada duas estrelas capturadas a velocidade dos inimigos aumentam, deixando o jogo mais desafiador!


##Instruções técnicas

A função `createEnemies` randomiza os inimigos sempre que pegamos estrela, escolhendo suas posições através de um vetor de posições para x e para y


`Star.prototype.update`

a função checa o caso de colisão do jogador com a estrela, caso ocorra ela cria outra estrela randomicamente utilizando a `createStar` e calcula a quantidade de estrelas que o jogador pegou, logo após ele atualiza o recorde atual do jogador e aumenta a velocidade dos inimigos.
