//Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};


//instanciação
const pessoa1 = new Pessoa('Matheus' , 'Rocha' );
const pessoa2 = new Pessoa('Maria' , 'Angélica');

console.dir(pessoa1);
console.dir(pessoa2);
