let varA = 'A';
let varB = 'B';
let varC = 'C';
const varInc = varA;
//primeira solução 

varA = varB;
varB = varC;
varC = varInc;
console.log(varA, varB, varC);

//segunda solução
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);

//formas de exibir uma  string
//               01234567
let umaString = "Um texto";
let aspas1 = 'Um "texto"';
let aspas2 = "Um \"texto\"";

console.log(umaString[4], aspas1, aspas2);
console.log(umaString.concat(' em',' um',' lindo dia.'));
console.log(`${umaString} em um lindo dia.`)

console.log(umaString.indexOf('texto'));// achar uma palavra "string" o resultado é uma posição do indice.

console.log(umaString.indexOf('te',2));// achar uma palavra "string" a partir de uma determinada posição.

console.log(umaString.lastIndexOf('Um', 7))// achar uma palavra "string"a partir de uma determinada posição de trás para frente.

console.log(umaString.match(/[a-z]/g));//achar todas as letras minusculas no texto de uma string.

console.log(umaString.match(/[a-z]/));//acha letras minusculas posição, o texto ,e grupo.

console.log(umaString.search(/x/));//acha a posição letra 

console.log(umaString.replace('Um','este')); // substitui uma palavra por outra
