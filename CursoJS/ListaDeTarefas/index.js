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
    salvarTarefa();
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

document.addEventListener('click',function(e){
    const el = e.target; //qual quer lugar da tela que for clicado fica resgistrado 
    //console.log(el);
    if( el.classList.contains('apagar')){
        el.parentElement.remove(); // vai remover o pai da li criada
        salvarTarefa();
    }

});

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto); // a tarefa foi salva em um array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);// converte um elemento para string no formato JSON
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); //pega cada item salvo 
    const listaDeTarefas = JSON.parse(tarefas);// converte para o formato anterior ao JSON
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();