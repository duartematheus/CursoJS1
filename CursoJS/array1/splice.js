const arrayNomes = ['Maria','João','José','Matheus'];
//arrayNomes.splice(indice,delete,elem1,elem2,elem3);
const removidos = arrayNomes.splice(1, 2);
const adicionando = arrayNomes.splice(2, 0, 'Gabriela', 'Luana');


console.log(arrayNomes,removidos, adicionando);