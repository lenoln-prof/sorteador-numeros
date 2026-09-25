const campoQuantidade = document.getElementById('quantidade');
const campoInicio = document.getElementById('de');
const campoFim = document.getElementById('ate');
const resultado = document.getElementById('resultado');

var quantidade, inicio, fim;

const botaoSortear = document.getElementById('btn-sortear');
const botaoReiniciar = document.getElementById('btn-reiniciar');

document.addEventListener('DOMContentLoaded', () => {
    campoQuantidade.focus();
});

botaoSortear.addEventListener('click', sortear);
botaoReiniciar.addEventListener('click', reiniciar);


campoFim.addEventListener('keypress', (event) => {
    if (event.key === "Enter") sortear();
});


function sortear() {
    verificarCampos();
}


function reiniciar() {
    campoQuantidade.value = '';
    campoInicio.value = '';
    campoFim.value = '';

    resultado.innerHTML =
        '<label class="texto__paragrafo">' +
        'Números sorteados: nenhum até agora' +
        '</label>';

    botaoReiniciar.disabled = true;
    botaoReiniciar.classList.add('desabilitado');

    campoQuantidade.focus();
}

function verificarCampos() {
    const quantidadeTexto = campoQuantidade.value;
    const inicioTexto = campoInicio.value;
    const fimTexto = campoFim.value;

    if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
        alert('Preencha todos os campos.');
        return;
    }

    quantidade = Number(quantidadeTexto);
    inicio = Number(inicioTexto);
    fim = Number(fimTexto);

    validarCampos();
}

function validarCampos() {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser um número inteiro maior que zero.');
        return;
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim) ||
        inicio < 1 || fim < 1) {
        alert('O início e o fim devem ser números inteiros maiores que zero.');
        return;
    }

    if (inicio > fim) {
        alert('O valor inicial não pode ser maior que o valor final.');
        return;
    }

    sortearNumeros();
}

function sortearNumeros() {
    const sorteados = [];
        0 < 5
    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(
            Math.random() * (fim - inicio + 1)
        ) + inicio;
        sorteados.push(numero);
    }

    resultado.innerHTML =
        '<label class="texto__paragrafo">' +
        `Números sorteados: ${sorteados.join(' - ')}` +
        '</label>';

    botaoReiniciar.disabled = false;
    botaoReiniciar.classList.remove(
        'desabilitado'
    );
    botaoReiniciar.classList.add('container__botao');

}