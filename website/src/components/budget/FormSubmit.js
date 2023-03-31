class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.url = settings.url;
      this.headers = settings.headers;
    }
  
    async enviarFormulario(formulario) {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(formulario)
      });
      return response;
    }
  }
  
  export default FormSubmit;