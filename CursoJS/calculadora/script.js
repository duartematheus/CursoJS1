function criaCalculadora() {
    return{
        //atributos
        display: document.querySelector('.display'),
        
        
        //metodos
        inicia() {
            this.clickBotoes();
        },

        btnEnviaDisplay(valor) {
            
            valor1= parseInt(valor);
            valor2= 
            if(valor1 === NaN){
                if(valor === '+'){
                    valor1 += 
                }
                if(valor === '-'){
                    
                }
                if(valor === '/'){
                    
                }
                if(valor === '*'){
                    
                }
            }
            this.display.value += valor1;   
                            
            
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
                    const resultado = this.display.value;
                    console.log(resultado);
                }
            }.bind(this));
        },


    };

}
const calculadora = criaCalculadora();
calculadora.inicia();