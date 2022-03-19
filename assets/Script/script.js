let nome = document.querySelector('#nome')
let nomeok = false
let email = document.querySelector('#email')
let emailok = false
let assunto = document.querySelector('#assunto')
let assuntook = false
let mapa = document.querySelector('#mapa')
let contador = document.querySelector('#contador')
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function validaNome() {
    let txt = document.querySelector('#txtNome')
    txt.style.height='2rem'
    if( nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = '#7f0203'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'Green'
        nomeok = true
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    txt.style.height='1.5rem'
    if( email.value.match(regex)) {
        txt.innerHTML = 'Email válido'
        txt.style.color = 'Green'
        emailok= true;
    }else{
        emailok = truetxt.innerHTML = "Email Inválido"
        txt.style.color = '#7f0203'
    }

}

function validaAssunto() {
    let txt = document.querySelector('#txtAssunto')
    txt.style.height='1.5rem'

    contador.innerHTML = `${assunto.value.length}/100`

    if( assunto.value.length >= 100) {
        txt.innerHTML = "Texto excedeu o limite de 100 caractéres"
        txt.style.color = '#7f0203'
    }else{
        txt.style.display='none'
        assuntook = true
    }

}

function enviar(){
    if (nomeok == true && emailok == true && assuntook == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert('Preencha todos os campos do formulário corretamente')
    }
}

function subirTela(){
    window.scrollTo(0,0)
}

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})

// function mapaZoom(){
//     mapa.style.width = "600px"
//     mapa.style.height = "600px"
// }

// function mapaNormal(){
//     mapa.style.width = "400px"
//     mapa.style.height = "250px"
// }