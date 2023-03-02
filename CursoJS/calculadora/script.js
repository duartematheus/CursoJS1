function criaCalculadora() {
    return{
        //atributos
        display: document.querySelector('.display'),
        
        
        //metodos
        inicia() {
            this.clickBotoes();
        },

        btnEnviaDisplay(valor) {
            this.display.value += valor;

        },

        clickBotoes(){
            document.addEventListener('click', function(e) {
                const el = e.target; //qual botão está sendo clicado.

                if(el.classList.contains('btn-num')) {
                    this.btnEnviaDisplay(el.innerText);//pega o valor dentro do btn no html
                }
            }.bind(this));
        },


    };

}
const calculadora = criaCalculadora();
calculadora.inicia();