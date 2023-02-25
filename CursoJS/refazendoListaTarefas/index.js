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
    includeBtnApagar(lista);
     salvarTarefa(); 
     inputTarefas.value = '';
     
    
}

btnAdicionar.addEventListener('click',function(){
    if(!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
    
})

function includeBtnApagar(Li){
    Li.innerText += '   ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class','apagar');
    btnApagar.setAttribute('title','Apagar texto');
    Li.appendChild(btnApagar);
}

document.addEventListener('click', function(e) {
    const click = e.target;
    //console.log(click);
    if(click.classList.contains('apagar')){
        click.parentElement.remove();
        salvarTarefa();
    }
})

inputTarefas.addEventListener('keypress', function(e){
    //console.log(e);
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);
    }
})

function salvarTarefa(){
    const listTarefas = tarefas.querySelectorAll('li');
    const listDeTarefas = [];
    for( let tarefa of listTarefas){
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar','').trim();
        listDeTarefas.push(textoTarefa);
    }
    const tarefaJson = JSON.stringify(listDeTarefas);
    localStorage.setItem('tarefas', tarefaJson);
}

function adicionaTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefaSalvas();