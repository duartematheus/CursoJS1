//IEEE 754 - 2008
let num1 = 1;
let num2 = 3.4556634552;

console.log(num1 + num2);
console.log(num1.toString() + num2);
console.log(num1.toString(),' ', + num2);
num1=num1.toString();
console.log(num1 + num2);

num1=10;
console.log(num1.toString(2)); //converte o numero para binario
console.log(num2.toFixed(4));//Arrendondamento de numeros
console.log(Number.isInteger(num2));//Retorna o valor se é inteiro "true" or falso "false"
let temp = 'ola' * 4;
console.log(Number.isNaN(temp));//verifica se não é numero, se nao for numero retorna true, se for numero retorna false

let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4);

num3 += num4;
console.log(num3);
console.log(num3.toFixed(2));

num3 = parseFloat(num3.toFixed(2));
console.log(num3);
console.log(Number.isInteger(num3));// verifica se um numero é inteiro

//Exemplo Math
let num5 = 1.54578;
let num6 = Math.floor(num5); //Arredonda o numero para baixo.
let num7 = Math.ceil(num5); //Arredonda para cima.
let num8 = Math.round(num5); //Arredonda para o numero mais proximo
const aleatorio = Math.random() * (10 - 5) +5;//Gera numero aleatorio entre 10 e 5; 

console.log(num6);
console.log(num7);
console.log(num8);
console.log(Math.max(2,3,4,8,9,10,22,356,6,75,32));
console.log(Math.min(2,3,4,8,9,10,22,356,6,75,32));
console.log(Math.round(aleatorio));
console.log(Math.PI);//Numero Pi
console.log(Math.pow(2, 10));//dois elevado a potencia de 10
console.log(2 ** 10);//dois elevado a potencia de 10
console.log(9 ** (1/2));//raiz quadrada de 9

