let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;


    // insere o leitor de texto ao jogo
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

mensagemInicial()


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {

        exibirTexto('h1', 'Acertou!')
        let palavraTentativas = tentativas > 1 ? "tentativas" : 'tentativa'
        exibirTexto('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!` )

        habilitarBotao();
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', `O número é menor`)
        } else {
            exibirTexto('p', `O número é maior`)
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto!')
    exibirTexto('p', `Escolha um número entre 1 e ${numeroLimite}`)
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    if (listaDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
} 

function habilitarBotao() {
    let botao = document.getElementById('reiniciar');
    botao.removeAttribute('disabled');
}

function desabilitarBotao() {
    let botao = document.getElementById('reiniciar');
    botao.setAttribute('disabled', '');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    desabilitarBotao();

    mensagemInicial();
}