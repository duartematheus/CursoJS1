const inputTarefas = document.querySelector(".inputTarefas");
const btnAdicionar = document.querySelector(".btnAdicionar");
const tarefas = document.querySelector(".tarefas");


function criaLista(){
    const Li = document.createElement('li');
    return Li;
}

function criaTarefa(texto){
    const lista = criaLista();
    lista.innerText = texto;    
    tarefas.appendChild(lista);
    btnApagar(lista);
    inputTarefas.value = '';
    
}

btnAdicionar.addEventListener('click',function(){
    if(!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
})

function btnApagar(Li){
    Li.innerText += '  ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute = ('class','apagar');
    btnApagar.setAttribute = ('title','Apagar texto');
    Li.appendChild(btnApagar);
}