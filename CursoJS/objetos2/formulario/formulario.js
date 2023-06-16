class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });

    }

    handleSubmit(e){
        e.preventDefault();
        //console.log('Formulário não enviado...');
        const camposValidos = this.camposSaoValidos();
        

    }

    camposSaoValidos(){
        let valid = true;

        for(let campo of this.formulario.querySelectorAll('.validar')){
            //console.log(campo);
            if(!campo.value){
                this.criaErro(campo, 'Campo tal não pode estar em branco.');
                valid = false;
            }
        }
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();