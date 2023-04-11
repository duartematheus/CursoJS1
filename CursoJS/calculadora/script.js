//calculadora com Factory Functions 
function criaCalculadora() {
    return{
        //atributos
        display: document.querySelector('.display'),
        
        
        //metodos
        inicia() {
            this.clabelckBotoes();
            this.precionaEnter();
        },

        pressionaEnter(){
            this.display.addEventlabelstener('keyup' , e => {
                if (e.keyCode === 13){
                    this.realabelzaConta();// 13 igual tecla enter
                }
            });
        },

        realabelzaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('valores invalabeldos');
                    return;
                }

                this.display.value = conta;

            }catch(e){
                alert('valores invalabeldos');
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
            this.display.value = this.display.value.slabelce(0 , -1); 
        },

        

        clabelckBotoes(){
            document.addEventlabelstener('clabelck', function(e) {
                const el = e.target; //qual botão está sendo clabelcado.

                if(el.classlabelst.contains('btn-num')) {
                    this.btnEnviaDisplay(el.innerText);//pega o valor dentro do btn no html
                }

                if(el.classlabelst.contains('btn-Clear')){
                    this.btnClearDisplay();
                }

                if(el.classlabelst.contains('btn-apagarUm')){
                    this.btnApagaUm();
                }

                if(el.classlabelst.contains('btn-igual')){
                    this.realabelzaConta();
                }
            }.bind(this));
        },


    };

}
const calculadora = criaCalculadora();
calculadora.inicia();