const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-Adicionar');
const tarefas = document.querySelector('.tarefas');


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' '; //separa com espaço a palavra do botão
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(texto){
    const li = criaLi();
    li.innerText = texto;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}
//Aqui abaixo verifica se a tecla pressionada é 13 que indica o Enter do teclado
inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click',function(){
    if(!inputTarefa.value) return; //verifica se tem algo escrito la no input
    criaTarefa(inputTarefa.value);
})

botaoApagar.addEventListener('click',function(){

})