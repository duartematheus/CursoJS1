//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);



//////////////////Exemplo/////////////////////
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

const p1= new Produto('Camiseta', 50);
const p2= (p1);
const p3= {
    nome: 'Prato',
    preco: 40
};
Object.setPrototypeOf(p3, Produto.prototype);
p3.aumento(30);

const p4 = Object.create(Produto.prototype, {
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 24
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42        
    },
    nome:{
        writeble: true,
        configurable: true,
        enumerable: true,
        value:'Boné'
    }
});

//// atribuindo valores aos prototipes
p1.desconto(100);
p2.aumento(20);
p3.aumento(30);
p4.aumento(50);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);