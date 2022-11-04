/*

quando eu clicar no botão Fechar cartão da Milena: o cartão deve desaparecer
*/

let botaoAbrir = document.getElementById('botaoAbrirMilena')
let botaoFechar = document.getElementById('botaoFecharMilena')

let cartaoMilena = document.querySelector('#cartaoMilena')

botaoAbrir.onclick = function () {
  cartaoMilena.classList.remove('display-invisivel')
}

botaoFechar.onclick = function () {
  cartaoMilena.classList.add('display-invisivel')
}