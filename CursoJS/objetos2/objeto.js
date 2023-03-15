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

//Exemplo de factory 
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Matheus', 'Rocha Duarte');
console.log(p1.nomeCompleto);