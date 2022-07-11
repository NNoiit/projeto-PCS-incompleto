//pega os dados do formulario
const form = document.querySelector("[id=registrar-form]");

//verifica se o email é valido
function onEmail(){

    if(/\S+@\S+\.\S+/.test(email.value)){
        document.getElementById("atention").innerHTML = "Email valido";
    }else{
        document.getElementById("atention").innerHTML = "Email invalido";
    }

    liberaBtn()
}

//libera o botao de cadastrar
function liberaBtn(){
    form.btnSubmit.disabled = !formValid();
}

//verifica se os campos foram preenchidos
function formValid(){
    const nome = form.nome.value;
    if(!nome){
        return false;
    }

    const email = form.email.value;
    if(!email || !onEmail()){
        return false;
    }

    const cpf = form.cpf.value;
    if(!cpf){
        return false;
    }

    return true;
}

//cadastra o usuario
function cadastrar() {
    
    form.event.preventDefalt();

    
    const nome = form.nome.value,
    email = form.email.value,
    cpf = form.cpf.value;
    

    //confirmar que os cmpos foram preenchidos
    if(!nformValid()){
        document.getElementById("atention").innerHTML = "<font color='red'>Preencha todos os campos!!</font>";
    }else{
        const dados = {
        nome: nome,
        email: email,
        cpf: cpf,
        matricula: matricula,
        senha: cpf
        };
        
        firebase.auth().createUserWithEmailAndPassword(email, cpf).then(() =>{
            alert("Usuario cadastrado com sucesso!");
        }).catch(error => {
            alert("Erro ao cadastrar usuario!");
        });

        //window.location.href = "../login.html";
    }
}

    /*
    .add(dados).then((docRef) => {
        form.reset();
        document.getElementById("atention").innerHTML = "Usuario cadastrado com exito"
    })
    .cotch((error) => {
        document.getElementById("atention").innerHTML = "Usuario cadastrado não realizado"
    });*/

    