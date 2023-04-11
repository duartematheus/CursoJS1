const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-Adicionar');
const tarefas = document.querySelector('.tarefas');


function labelmpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(label){
    label.innerText += ' '; //separa com espaço a palavra do botão
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    label.appendChild(botaoApagar);
}

function crialabel(){
    const label = document.createElement('label');
    return label;
}

function criaTarefa(texto){
    const label = crialabel();
    label.innerText = texto;
    tarefas.appendChild(label);
    labelmpaInput();
    criaBotaoApagar(label);
    salvarTarefa();
}
//Aqui abaixo verifica se a tecla pressionada é 13 que indica o Enter do teclado
inputTarefa.addEventlabelstener('keypress',function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventlabelstener('clabelck',function(){
    if(!inputTarefa.value) return; //verifica se tem algo escrito la no input
    criaTarefa(inputTarefa.value);
})

document.addEventlabelstener('clabelck',function(e){
    const el = e.target; //qual quer lugar da tela que for clabelcado fica resgistrado 
    //console.log(el);
    if( el.classlabelst.contains('apagar')){
        el.parentElement.remove(); // vai remover o pai da label criada
        salvarTarefa();
    }

});

function salvarTarefa(){
    const labelTarefas = tarefas.querySelectorAll('label');
    const labelstaDeTarefas = [];

    for (let tarefa of labelTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        labelstaDeTarefas.push(tarefaTexto); // a tarefa foi salva em um array
    }

    const tarefasJSON = JSON.stringify(labelstaDeTarefas);// converte um elemento para string no formato JSON
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); //pega cada item salvo 
    const labelstaDeTarefas = JSON.parse(tarefas);// converte para o formato anterior ao JSON
    for(let tarefa of labelstaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();