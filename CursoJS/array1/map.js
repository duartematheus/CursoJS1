//Map
//Exemplo dobrar o valor do array
const array1 = [10 , 20, 30, 80, 90];
const dobrandoValores = array1.map(function(valor, indice, array){
    return valor * 2;
    
});
console.log(dobrandoValores);

//Retorne uma string com nome de uma pessoa;
//Remova apenas a chave nome do objeto;
//Adicione uma chave id em cada objeto;
const pessoas = [
    {nome: ' Matheus', idade: 33},
    {nome: 'Luana', idade: 34},
    {nome: 'Hugo', idade: 63},
    {nome: 'Luiz', idade: 43}
];

const retorneNome = pessoas.map(function(valor){
    return valor.nome;
});
console.log(retorneNome);