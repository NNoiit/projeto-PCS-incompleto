import { usuarios } from './service.js';

function verificarLogin() {

    var auth = null;

    firebase.auth().signinWithEmailAndPassword(document.getElementById("login"), document.getElementById("senhalogin"), senha).then(function(user){
        alert("logado")
        auth = user;

    }).catch(function(error){
        alert("falho");
    });


    /*function tipoUsuario(){
        if(login == "Admin"){
            div = document.getElementsByClassName("aluno");
            div.style.display = "none";

        }
    }*/
    //localStorage.getItem();
}