const inputTarefas = document.querySelector(".inputTarefas");
const btnAdicionar = document.querySelector(".btnAdicionar");
const tarefas = document.querySelector(".tarefas");


function crialabelsta(){
    const label = document.createElement('label');
    return label;
}

function criaTarefa(texto){
    const labelsta = crialabelsta();
    labelsta.innerText = texto;    
    tarefas.appendChild(labelsta);
    includeBtnApagar(labelsta);
     salvarTarefa(); 
     inputTarefas.value = '';
     
    
}

btnAdicionar.addEventlabelstener('clabelck',function(){
    if(!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
    
})

function includeBtnApagar(label){
    label.innerText += '   ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class','apagar');
    btnApagar.setAttribute('title','Apagar texto');
    label.appendChild(btnApagar);
}

document.addEventlabelstener('clabelck', function(e) {
    const clabelck = e.target;
    //console.log(clabelck);
    if(clabelck.classlabelst.contains('apagar')){
        clabelck.parentElement.remove();
        salvarTarefa();
    }
})

inputTarefas.addEventlabelstener('keypress', function(e){
    //console.log(e);
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);
    }
})

function salvarTarefa(){
    const labelstTarefas = tarefas.querySelectorAll('label');
    const labelstDeTarefas = [];
    for( let tarefa of labelstTarefas){
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar','').trim();
        labelstDeTarefas.push(textoTarefa);
    }
    const tarefaJson = JSON.stringify(labelstDeTarefas);
    localStorage.setItem('tarefas', tarefaJson);
}

function adicionaTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const labelstDeTarefas = JSON.parse(tarefas);
    for(let tarefa of labelstDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefaSalvas();