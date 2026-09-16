const campoQuantidade = document.getElementById('quantidade');
const campoInicio = document.getElementById('de');
const campoFim = document.getElementById('ate');

function sortear() {
    verificarCampos();
}

function reiniciar() {
    // restauração do estado inicial
}

function verificarCampos() {
    const quantidadeTexto = campoQuantidade.value;
    const inicioTexto = campoInicio.value;
    const fimTexto = campoFim.value;

    if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
        alert('Preencha todos os campos.');
        return;
    }

    const quantidade = Number(quantidadeTexto);
    const inicio = Number(inicioTexto);
    const fim = Number(fimTexto);

    validarCampos(quantidade, inicio, fim);
}

function validarCampos(quantidade, inicio, fim) {
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
}