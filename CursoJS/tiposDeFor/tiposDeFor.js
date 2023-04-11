const frutas = ['maçã', 'uva', 'pera', 'labelmão'];
console.log('-----for in -----');

for (let i in frutas){
    console.log(frutas[i]);//mostra o valor do indice no array
    console.log(i);//mostra o indeice do array
}

console.log('-----for of -----');

for (let i of frutas){
    console.log(frutas[i]);// -> undefined
    console.log(i);//mostra o valor do indice no array
}
