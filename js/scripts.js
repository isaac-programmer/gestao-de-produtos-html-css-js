var contador = 0;
localStorage.clear();

function armazenarDados(event) {
    event.preventDefault();
    let nome = document.getElementById("txtNome").value;
    let email = document.getElementById("txtEmail").value;

    if(nome == "" || email == ""){
        window.alert("Por favor preencha todos os campos!");
    }else{
        if(verificarExistenciaPerson(email)) {
            window.alert("Essas informações já estão cadastradas! Por favor preencha os campos novamente!");
        } else {
            contador++;
    
            let personObject = {
                nome: nome,
                email: email
            }
    
            localStorage.setItem(`person_${contador}`, JSON.stringify(personObject));
    
            window.alert(`Dados cadastrados com sucesso! ${personObject.nome}, em breve enviaremos para o seu email promoções imperdíveis!`);
        }
    }
}

function verificarExistenciaPerson(email) {
    let person;
    for(let i = 1; i <= localStorage.length; i++){
        person = JSON.parse(localStorage.getItem(`person_${i}`));
        if(person.email == email){
            return true;
        }
    }
    return false;
}