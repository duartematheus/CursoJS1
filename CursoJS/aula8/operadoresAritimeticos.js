/*
Operadores Aritimeticos
+ Adição
- Subtração
/ Divisão
* Multiplabelcação
** potenciação
% Resto da divisão
++ Incremento
-- Decremento
NaN- Not a Number
parseInt(inteiro)
parseFloat(decimais)
Number
*/
let num1 = 2;
let num2 = 5;
const num3 = 10;
let num4 = parseInt('5.2');//Considera a parte inteira do numero

console.log(num1 + num2,'Adição');
console.log(num1 - num2,'Subtração');
console.log(num2/num1,'Divisão');
console.log(num1 * num2,'Multiplabelcação');
console.log(num1 ** num2,'Potenciação');
console.log(num2 % num1,'Resto da divisão');
console.log(num1++,'pós incremento',++num1,'pré Incremento');
console.log(num2--,'pós decremento',--num2,'pré decremento');

console.log(num3 * num4, typeof num4);
num4 = parseFloat('5.2');//Considera o numero completo
console.log(num3 * num4);
num4 = Number('5.2');
console.log(num3 * num4, typeof num4);