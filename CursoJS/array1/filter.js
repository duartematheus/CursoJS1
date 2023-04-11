//Filter
// Retornar valores maiores que 10
const numeros = [5, 50, 60, 80,1,2,3,4,5,11,15,13];

function callbackFilter(valor,indice,array) {
    /*if(valor >10){
        return true;
    }else{
        return false;
    }*/
    //simplabelficando
    return valor > 10;
}


const numerosFiltrados = numeros.filter(callbackFilter);
//outra forma
const numerosFiltrados2 = numeros.filter(valor => { return valor >10;});
//outra forma
const numerosFiltrados3 = numeros.filter(valor => valor >10);

console.log(numerosFiltrados, numerosFiltrados2, numerosFiltrados3);


//Outro exemplo
//Retorne os nomes com 5 letras ou mais.
//Retorne as pessoas com mais de 50 anos.
//Retorne as pessoas cujo nome termina com 'a'.

const pessoas = [
    {nome: 'Matheus' , idade: 33},
    {nome: 'Antõnio' , idade: 65},
    {nome: 'José' , idade: 45},
    {nome: 'Fernando' , idade: 50},
    {nome: 'Gabriela' , idade: 30}

];

const tamanhoDeNome = pessoas.filter(function(valor){
    return valor.nome.length >= 5;
    
});
console.log(tamanhoDeNome);

const idadeMaior = pessoas.filter(objeto => objeto.idade > 50);
console.log(idadeMaior);

const nomeTermina = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(nomeTermina);