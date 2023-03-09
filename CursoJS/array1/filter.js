//Filter
// Retornar valores maiores que 10
const numeros = [5, 50, 60, 80,1,2,3,4,5,11,15,13];

function callbackFilter(valor,indice,array) {
    /*if(valor >10){
        return true;
    }else{
        return false;
    }*/
    //simplificando
    return valor > 10;
}



const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);