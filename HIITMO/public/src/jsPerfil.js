function preencherCampos(){
    usuarios.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
    if( key !=undefined && key != ""){
    


    document.getElementById("nome").value = $dado.nome;
    document.getElementById("email").value = $dado.email;
    document.getElementById("cpf").value = $dado.cpf;
    document.getElementById("matricula").value = $dado.matricula;
    }
}
function fazerLogOff(){
    localStorage.setItem("ultimoLogin","");
    window.location.href = "index.html";
}
function mudarSenha(){
    let novaSenha = document.getElementById("novaSenha").value;
    let key = localStorage.getItem("ultimoLogin");
    let objeto = JSON.parse(localStorage.getItem(key));
    let pSenha = objeto.senha;

    if(pSenha == document.getElementById("senha")){}
        if(novaSenha != ""){
        objeto.senha = document.getElementById("novaSenha").value;
        let objetoJson = JSON.stringify(objeto);
        localStorage.setItem(key,objetoJson);
        
        document.getElementById("atention").innerHTML = "<font color='red'>Senha alterada com exito!!</font>";
        }
}
