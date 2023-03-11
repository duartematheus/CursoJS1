//Map
//Exemplo dobrar o valor do array
const array1 = [10 , 20, 30, 80, 90];
const dobrandoValores = array1.map(function(valor, indice, array){
    return valor * 2;
    
});
console.log(dobrandoValores);