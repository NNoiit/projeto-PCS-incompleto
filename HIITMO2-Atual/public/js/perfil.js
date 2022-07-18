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
    navUser(users.tipo);
}