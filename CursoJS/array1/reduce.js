//somar todos valores
//retorne todos os pares
//retorne um array com o dobro dos valores
const arrayNumeros = [51, 30, 69, 70, 90, 20];

const total = arrayNumeros.reduce(function(acumulador, valor, indice, array) {
    return acumulador += valor;
}, 0);

const pares = arrayNumeros.reduce(function(acumulador,valor,indice,array){
    if( valor % 2 ===0) acumulador.push(valor);
    return acumulador;
}, []);

const dobro = arrayNumeros.reduce(function(acumulador,valor,indice,array){
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(total);
console.log(pares);
console.log(dobro);


//Retorne a pessoa mais velha
const pessoas1 = [
    {nome: 'Luiz' , idade: 62},
    {nome: 'Maria' , idade: 32},
    {nome: 'José' , idade: 40}
];
const maisVelho = pessoas1.reduce(function(acumulador , valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelho);
