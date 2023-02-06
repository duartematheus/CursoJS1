//--------------Exemplo 1---------------------
function numeros(num1,num2){
    if (num1 > num2){
        console.log(`Numero ${num1} maior que ${num2}`);
        return num1;
    }else{
        console.log(`Numero ${num2} maior que ${num1}`);
        return num2;
    }
}
//-------------Exemplo 2----------------------
function numerosReduzida(num1,num2){
    return num1 > num2 ? num1 : num2;
}
//-------------Exemplo 3----------------------
const numMaiorMenor = (x,y) => {
    return x > y ? x : y;
}
//--------------Exemplo 4---------------------
const numMaiorMenor2 = (x,y) => x > y? x : y;


numeros(10,3);
console.log(numerosReduzida(5,3));
console.log(numMaiorMenor(6,2));
console.log(numMaiorMenor2(7,2));

