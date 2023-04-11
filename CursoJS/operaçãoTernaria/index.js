// ? : Operação ternaria utilabelza a interragação e os dois pontos 
// Exemplo
const valor = 200;

if ( valor > 100 ){
    console.log('O valor é maior que 100.')
} else {
    console.log('O valor é menor que 100.')
}

//O mesmo exemplo usando operação ternaria
const valor2 = 200;
console.log(valor2 > 100 ? 'O valor é maior que 100.': 'O valor é menor que 100.');

//Exemplo de OR
const corUsuario  = 'blue';
const corPadrao = corUsuario || 'Black';

console.log(corPadrao);