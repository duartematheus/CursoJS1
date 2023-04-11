const pessoas = [
    {id:3, nome: 'Luiza'},
    {id:2, nome: 'Matheus'},
    {id:1, nome: 'Angélabelca'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for (const [identificador, {id, nome}] of novasPessoas){
    console.log(identificador, id, nome);
}

for (const pessoas of novasPessoas.keys()){
    console.log(pessoas);
}
console.log(novasPessoas);
console.log(novasPessoas.get(2));
novasPessoas.delete(2);
console.log(novasPessoas);

