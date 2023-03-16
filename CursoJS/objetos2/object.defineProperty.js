// defineProperty defineProperties
function Produto(nome , preco, estoque){
    Object.defineProperty( this, 'estoque', {
        enumerable: true, //mostra a chave 'valor'
        value: estoque, //recebe o valor 
        writable: true, //pode alterar o valor
        configurable: true //configuravel
    });

    Object.defineProperties(this, {
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });

}

const produto1 = new Produto('carro', 250000, 2);
console.log(produto1);
console.log(Object.keys(produto1));

for(let chave in produto1){
    console.log(chave);
}
