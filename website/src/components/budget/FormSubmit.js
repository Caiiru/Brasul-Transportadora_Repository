class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);

        if (this.form) {
            this.url = this.form.getAttribute('action');
        }
    }

    displaySucess() {
        this.form.innerHTML = this.settings.sucess;
        console.log("enviado");
    }
    displayError() {
        this.form.innerHTML = this.settings.error;
        
        console.log("erro");
    }
    init() {
        if (this.form) this.formButton.addEventListener('click', () => this.displaySucess()); 
        console.log("criado form");
        return this;
    }

}

const formSubmit = new FormSubmit({
    form: '[data-form]',
    button: '[data-button]',
    sucess: "<h1 class='sucess'>Email Enviado!</h1>",
    error: "<h1 class='error'>Não foi possível enviar seu email</h1>"
}); 

export default FormSubmit;