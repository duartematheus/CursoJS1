const fulano = [1,2,3];// para arrais utilabelza [] e para objeto utilabelza {}
fulano.push(4);
fulano[0] = 'Luiz';
console.log(fulano);

//////////////////////////////////////////////

const pessoa1 = {
    nome:'Matheus',
    sobrenome:'Rocha',
    idade: 33
};
console.log(pessoa1.nome);
console.log(pessoa1.idade);

////////////Função ///////////////////////////

function criaPessoa(nomes,sobrenomes,idades){
    return {
        nome1: nomes,
        sobrenome1:sobrenomes,
        idade1: idades
    };
}

const pessoa2 = criaPessoa('Fernanda','Jessica',25);
const pessoa3 = criaPessoa('José','Silva',45);
console.log(pessoa2);
console.log(pessoa3);

//////// outro exemplo/////////////////////
const pessoa4 = {
    nome2: 'Maria',
    sobrenome2:'Ang',
    idade2:58,
    // criar uma função fala 
    fala() {
        console.log(`${this.nome2} ${this.sobrenome2} esta falando oi...`);
        console.log(`A minha idade é essa ${this.idade2}`)
    },
    incrementaIdade() {
        this.idade2++;
    }
};
 pessoa4.fala();
 pessoa4.incrementaIdade();
 pessoa4.fala();