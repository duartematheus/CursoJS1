const produto = { nome: 'Caneca' , preco: 1.8};
const outraCoisa = {
    ...produto,
    material: 'papelão'
}; //copia os valores 
const materiais = Object.assign({},produto, {material: 'porcelana'});

Object.freeze(produto); //congela os valores do ojeto produto
produto.nome = 'teste';

outraCoisa.nome = 'caixa';
produto.preco = 2.0;
console.log(produto);
console.log(outraCoisa);
console.log(materiais);

console.log(Object.keys(produto)); //mostra as chaves 

///////////////////////////////////////
Object.defineProperty(outraCoisa, 'nome', {
    writable: false,
    configurable: false,
    value: 'valor para teste'
});
console.log(Object.getOwnPropertyDescriptor(outraCoisa,'nome'));
console.log(Object.values(outraCoisa));
console.log(Object.entries(produto));