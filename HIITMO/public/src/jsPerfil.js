import { usuarios } from "./service";


usuarios.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
function preencherCampos(){
    if( key !=undefined && key != ""){
    


    document.getElementById("nome").value = `${doc.nome}`;
    document.getElementById("email").value = `${$doc.email}`;
    document.getElementById("cpf").value = `${$doc.cpf}`;
    document.getElementById("matricula").value = `${doc.matricula}`;
    }
}
function fazerLogOff(){
    if(firebase.auth().currentUser){
        firebase.auth().signOut()
    }
    window.location.href = "index.html";
}
function mudarSenha(){
    let novaSenha = document.getElementById("msg-perfil").value;
    let d = document.getElementById("msg-perfil");

    if(`${doc.senha}` == document.getElementById("senha")){}
        if(novaSenha != ""){
        usuarios("usuarios").doc("`{$doc.nome}`").update({
            "senha" : `${doc.senha}` = document.getElementById("novaSenha").value
        }).then(() => {
            d.innerHTML = "Senha alterada";
        })
        }
}
