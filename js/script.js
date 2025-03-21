function sendInfo(){

    // Declaracion de variables
    let nameInput = document.getElementById('name').value;
    let ageInput = parseInt(document.getElementById('age').value);
    let divResultInput = document.getElementById('result');

    // Declaracion variables de error

    let err1 = `<p style="color: white; background-color: red; padding: 1%;">NO has puesto ningún campo numerico </p>`;
    let errRequest = '"400 Bad Request: The server could not understand the request due to invalid syntax."';

    // Declarar otras variables

    let message = '';

    // Validate
    if(isNaN(ageInput)){
        console.log(errRequest);
        divResultInput.innerHTML = err1;
    }



}