function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../login.html";
    }).catch(() => {
        liberaBtn("Erro ao sair");
    })
}

firebase.auth().onAuthStateChanged(user =>{
    if(user){
      pegarInfoDB(user);  
    }
});

//pegando as informações do BD
function pegarInfoDB(uid){

    firebase.firestore().collection("user").where("email", "==", uid.email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());
        preenchercampos(users[0]);
    }).catch(error =>{
            console.log("erro" , error);
    })

}

//usando as informações apra preencher os campos do perfil
function preenchercampos(users){
    document.getElementById("nome").value = users.nome;
    document.getElementById("email").value = users.email;
    document.getElementById("cpf").value = users.cpf;

    //chama a função para criar a barra de menu
    tipoUser(users.tipo);
}

//função para alterar para pagina de alteração de senha
function alterarPerfil(){

    let bloco = document.querySelector('.perfil');

    let div = document.createElement('div');

    div.innerHTML = `
        <div id="altera-senha">
        <label for="senha">Senha Atual:</label>
        <input id="senha" type="password">
        <label for="senha">Nova Senha:</label>
        <input id="novaSenha" type="password">
        <label for="senha">Confirme a nova Senha:</label>
        <input id="novaSenhaC" type="password">
        <button class="btn-medio" onclick="alterarSenha()">Confirmar</button>
        <button class="btn-medio" id="cancelar" onclick="btnCancelar()">Cancelar</button>
        </div>
        `
    bloco.append(div);

    let divPrincipal = document.querySelector("#perfil-bloco");
        divPrincipal.style.display = 'none';
}

//função para alteração de senha