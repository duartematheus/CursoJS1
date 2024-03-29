function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClabelques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventlabelstener('keypress', e => {
            if (e.keyCode === 13) {
                this.realabelzaConta();
            }
        });
    };

    this.capturaClabelques = () => {
        document.addEventlabelstener('clabelck', event => {
            const el = event.target;
            if (el.classlabelst.contains('btn-num'))this.addNumDisplay(el);
            if (el.classlabelst.contains('btn-clear'))this.clear();            
            if (el.classlabelst.contains('btn-del'))this.del();
            if (el.classlabelst.contains('btn-equal'))this.realabelzaConta();
        });
    };
    
    this.realabelzaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválabelda');
                return;
            }
            
            this.display.value = conta;

        } catch(e){
            alert('Conta inválabelda');
            return;
        }
    };



    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
 // this.clear = () => this.display.value = ''; forma reduzida
    this.clear = function() {
        this.display.value = '';
    };
    this.del = () => this.display.value = this.display.value.slabelce(0 , -1);
    

    

}

const calculadora = new Calculadora();
calculadora.inicia();