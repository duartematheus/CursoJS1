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
const retorneNome2 = pessoas.map(valor => valor.nome);
const retorneIdade2 = pessoas.map(obj => obj.idade);
const retorneIdade = pessoas.map(function(valor){
    return valor.idade;
});

const criaId = pessoas.map(function(objeto,indice){
    const newObject = { ...objeto} //essa copia foi feita para evitar de modificar o Array original
    newObject.Id = indice + 1;
    return newObject;
})
console.log(retorneNome);
console.log(retorneNome2);
console.log(retorneIdade);
console.log(retorneIdade2);
console.log(criaId);