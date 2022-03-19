// Tag para colocar no final do body do HTML
//<script src="./asssets/script/script.js"></script>

//? Declarçõs de variaveis

var nome3 //menos usada, escopo global
let nome1 // escopo fechado - let it change, variavel que pode mudar
const nome2 //escopo fechado, variável que não vai sofrer alterações ao longo do tempo (ex. Botão)

// acesso à DOM

const botao = document.getElementsByTagName(button)
const botao = document.getElementsByClassName(enviar)
const botao = document.getElementsById(enviar)
const botao = document.get

const enviar = document.querySelector('#id')
enviar.addEventListener('click', () =>{
    alert('enviado')
})

function enviarForm(){
    alert('enviado')
}

