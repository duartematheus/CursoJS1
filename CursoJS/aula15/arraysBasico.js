const alunos = ['luiz','maria','joao'];
console.log(alunos);
console.log(alunos[1]);
alunos[1] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);
console.log(alunos.length);
alunos[alunos.length] = 'Matheus';// Adiciona uma string ou numero no final da lista.
console.log(alunos);
alunos[alunos.length] ='Giralda';// Adiciona uma string ou numero no final da lista.
console.log(alunos);
alunos.push('carlos');// Adiciona uma string ou numero no final da lista.
console.log(alunos);
alunos.unshift('josé');//Adiciona no inicio da lista
console.log(alunos);
const removido = alunos.pop();//Remove o ultimo item da lista e salva nesta const "removido"
console.log(`Foi removido ${removido}`);
console.log(alunos);
const removido2 = alunos.shift();//Remove o ultimo item da lista.
console.log(`Foi removido ${removido2}`)
console.log(alunos);
delete alunos[1];
console.log(alunos);

console.log(alunos.slice(0,3));//Mostra apenas os valores neste range entre posição 0 e 3;
console.log(alunos.slice(0, -4));//Mostra apenas os valores neste range entre posição 0 e 3;
console.log(typeof alunos);//Verifica o tipo de dados 
console.log(alunos instanceof Array);//verifica se é um array