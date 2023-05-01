class Formulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.EventSource();
    }
    eventos(){
        this.formulario.addEventlistener('submit' , e=>{
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefaut();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas){
            alert('Formulario enviado');
            this.formulario.submit();
        }

    }
    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha')
    }
}