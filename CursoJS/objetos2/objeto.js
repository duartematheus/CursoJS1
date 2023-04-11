const pessoa1 = {
    nome: 'Matheus' ,
    sobrenome: 'Rocha'
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1);

// É similar 
const pessoa2 = new Object();
pessoa2.nome = 'Matheus';
pessoa2.sobrenome = 'Rocha';

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2);

//função dentro do objeto

const pessoa3 = new Object();
pessoa3.nome = 'Matheus';
pessoa3.sobrenome = 'Rocha';
pessoa3.idade = '33';
pessoa3.falarNome = function() {
    return (`${this.nome} este é seu nome ?`);
};
pessoa3.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let valor in pessoa3){
    console.log(pessoa3[valor]);
}

console.log(pessoa3.nome);
console.log(pessoa3.sobrenome);
console.log(pessoa3);

//Exemplo de factory function
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Matheus', 'Rocha Duarte');
console.log(p1.nomeCompleto());

//Constructor function
//começa com letra maiuscula.
function Pessoa(nome2, sobrenome2){
    this.nome2 = nome2;
    this.sobrenome2 =sobrenome2

    Object.freeze(this); // Congela os valores referenciados pelo "this".
}

const p2 = new Pessoa('Maria','Angélabelca');
p2.nome2 = 'Luana'; // Neste momento estamos alterando o valor do nome2 
console.log(p2);
