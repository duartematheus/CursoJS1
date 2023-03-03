//calculadora com Factory Functions 
function criaCalculadora() {
    return{
        //atributos
        display: document.querySelector('.display'),
        
        
        //metodos
        inicia() {
            this.clickBotoes();
            this.precionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup' , e => {
                if (e.keyCode === 13){
                    this.realizaConta();// 13 igual tecla enter
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('valores invalidos');
                    return;
                }

                this.display.value = conta;

            }catch(e){
                alert('valores invalidos');
                return;
            }
        },

        btnEnviaDisplay(valor) {
            
            this.display.value += valor;                               
            
        },

        btnClearDisplay(){
            this.display.value = '';
        },

        btnApagaUm(){
            this.display.value = this.display.value.slice(0 , -1); 
        },

        

        clickBotoes(){
            document.addEventListener('click', function(e) {
                const el = e.target; //qual botão está sendo clicado.

                if(el.classList.contains('btn-num')) {
                    this.btnEnviaDisplay(el.innerText);//pega o valor dentro do btn no html
                }

                if(el.classList.contains('btn-Clear')){
                    this.btnClearDisplay();
                }

                if(el.classList.contains('btn-apagarUm')){
                    this.btnApagaUm();
                }

                if(el.classList.contains('btn-igual')){
                    this.realizaConta();
                }
            }.bind(this));
        },


    };

}
const calculadora = criaCalculadora();
calculadora.inicia();