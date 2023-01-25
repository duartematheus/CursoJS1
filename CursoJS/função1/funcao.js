//Criando uma função
function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
    return 123456;
}
//Chamando uma função
saudacao('Luiz');
saudacao('Maria');
const variavel = saudacao('José');
console.log(variavel);

//Exemplo de uma função que retorna um valor
function saudacao2(nome2){
    return `Bom dia correto ${nome2}!`;
}
const variavel2 = saudacao2('José');
console.log(variavel2);

//Exemplo de função que retorna valor de uma soma
function soma(x,y){
    const resultado = x + y;
    return resultado;
}
console.log(`Resultado ${soma(2,3)}`);

//Exemplo de função dentro de um const
const raiz = function (n){
    return n ** 0.5;
};
console.log(raiz(9));

// Mesmo exemplo anterior escrito de outra forma
const raiz2 = (n) =>{
    return n **0.5;
};
console.log(raiz2(25));

//Forma simplificada de uma função quando o parametro é unico
const raiz3 = n => n **0.5;
console.log(raiz3(36));