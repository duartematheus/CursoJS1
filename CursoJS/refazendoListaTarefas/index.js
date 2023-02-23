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
    }
})

inputTarefas.addEventListener('keypress', function(e){
    //console.log(e);
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);
    }
})