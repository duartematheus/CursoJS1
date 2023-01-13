const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('num-titulo');
const perguntas = document.getElementById('frases');

numeroTitulo.innerHTML = numero;
perguntas.innerHTML = `<p>Seu numero -2 é ${numero -2}</p><p>${numero} é inteiro: ${Number.isInteger(numero)} </p><p>É NaN: ${Number.isNaN(numero)}</p><p>Arredondando para baixo :${Math.floor(numero)}</p><p>Arredondando para cima : ${Math.ceil(numero)}</p><p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;