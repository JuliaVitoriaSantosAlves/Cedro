const inputBusca = document.getElementById('inputBusca');

inputBusca.addEventListener('focus', () => {
    inputBusca.classList.add('focus');
    aumentarFormulario();
});

inputBusca.addEventListener('blur', () => {
    inputBusca.classList.remove('focus');
    diminuirFormulario();
});

function aumentarFormulario() {
    const formulario = document.querySelector('form');
    const alturaAtual = parseFloat(window.getComputedStyle(formulario).height);
    formulario.style.height = `${alturaAtual * 1.04}px`;
}

function diminuirFormulario() {
    const formulario = document.querySelector('form');
    const alturaAtual = parseFloat(window.getComputedStyle(formulario).height);
    formulario.style.height = `${alturaAtual / 1.04}px`;
}
