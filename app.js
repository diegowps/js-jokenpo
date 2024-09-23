/**
 * 
 * Jokenpo
 * @author Diego
 * @link https://github.com/diegowps/js-jokenpo.git
 * @version 1.0
 * 
 */

function jogar() {
    //validação de campos obrigatórios radio button//
   //teste da função em tela alert('Jogando...'); //teste da função em tela
   if (document.getElementById('pedra').checked === false && 
       document.getElementById('papel').checked === false && 
       document.getElementById('tesoura').checked === false) {
        alert('Selecione uma opção')
   } else { //selecionado um radio button, então o jogo pode começar
       //lógica do jogo(principal)//

       let sorteio = Math.floor(Math.random() * 3)//0 1 2
       switch (sorteio) {
           case 0:
               document.getElementById('pc').src = '/img/pcpedra.png';
               break;
           case 1:
               document.getElementById('pc').src = 'img/pcpapel.png';
               break;
           case 2:
               document.getElementById('pc').src = '/img/pctesoura.png';
               break;
       }

       //verificar o vencedor ou declarar empate
       if ((document.getElementById('pedra').checked === true && sorteio === 0) ||
           (document.getElementById('papel').checked === true && sorteio === 1) ||
           (document.getElementById('tesoura').checked === true && sorteio === 2)) {
           document.getElementById('placar').innerText = 'Empate';
       } else if ((document.getElementById('pedra').checked === true && sorteio === 2) ||
           (document.getElementById('papel').checked === true && sorteio === 0) ||
           (document.getElementById('tesoura').checked === true && sorteio === 1)) {
           document.getElementById('placar').innerText = 'Jogador venceu';
       } else {
           document.getElementById('placar').innerText = 'Computador venceu';
       }
   }



}
function limpar() {
    document.getElementById('pc').src = '/img/pc.png';
    document.getElementById('placar').innerHTML = '';
}