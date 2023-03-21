//definindo Getters e Setters
function Produto(nome , preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        configurable: true, // configuravel
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if( typeof valor !== 'number'){
                console.log('Valor errado')
                throw new TypeError('Você não digitou numeros');
            }

            estoquePrivado = valor;
        }

    });
}
const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 421;
console.log(p1.estoque);