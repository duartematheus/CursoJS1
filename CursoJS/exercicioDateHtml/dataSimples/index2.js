const mostrarData = document.querySelector('.container h1');
let hoje = new Date();
const datas = {
    dateStyle:'full',
    timeStyle:'short'
 
};

mostrarData.innerHTML = hoje.toLocaleString('pt-BR' , datas);
