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
        const senhasValidas = this.senhasSãoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulario enviado.');
            this.formulario.submit();
                     
        }
        
    }

    senhasSãoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha devem ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha devem ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            //console.log(campo);
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
            

        }
        return valid;
        
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo,'Usuario deve conter 3 a 12 digitos.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo,'Usuario deve conter letras maiusculas e minusculas e numeros.')
            valid = false;
        }

        return true;
    }

    validaCPF(campo){
        const cpf = new VerificaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

        

}

const valida = new ValidaFormulario();