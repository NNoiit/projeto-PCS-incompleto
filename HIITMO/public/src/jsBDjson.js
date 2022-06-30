//import { usuarios } from './service.js';
const usuarios = require('./service.js');

const form = document.querySelector("registrar-form");

function registrarUsuario() {
    form.addEventListener('submit'), (event) => {
        event.preventDefalt();

        //dados user
        let nome = form.nome.value,
        email = form.email.value,
        cpf = form.cpf.value,
        matricula = form.matricula.value,
        senha = form.senha.value;
        let dados;

        //Banco de dados
        if(nome == ""|| email == ""|| cpf == ""|| matricula ==""||senha== ""){
            document.getElementById("atention").innerHTML = "<font color='red'>Preencha todos os campos!!</font>";
        }else{
            dados = {
            nome: nome,
            email: email,
            cpf: cpf,
            matricula: matricula,
            senha: senha
            };
            
            usuarios.add(dados).then((docRef) => {
                form.reset();
                document.getElementById("atention").innerHTML = "Usuario cadastrado com exito"
            })
            .cotch((error) => {
                document.getElementById("atention").innerHTML = "Usuario cadastrado não realizado"
            })
        }
    }
}