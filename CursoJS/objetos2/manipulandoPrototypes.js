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
p1.desconto(100);
p2.aumento(20);
console.log(p1);
console.log(p2);