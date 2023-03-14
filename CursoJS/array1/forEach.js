//forEach
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
numeros.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

//forma reduzida
const numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
numeros.forEach((valor, indice, array) => console.log('forma reduzida \n',valor, indice, array));