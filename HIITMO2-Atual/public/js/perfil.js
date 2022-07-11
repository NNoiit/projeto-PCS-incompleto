function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../login.html";
    }).catch(() => {
        liberaBtn("Erro ao sair");
    })
}

//pegando as informações do BD
function pegarInfoDB(){
    firebase.firestore().collection("user").get().then((snapshot) =>{
        const users = snapshot.docs.map((doc) => doc.data());
        preenchercampos(users[0]);
    }).catch(error =>{
            console.log("erro" , error);
        })
}

function preenchercampos(users){
    document.getElementById("nome").value = users.nome;
    document.getElementById("email").value = users.email;
    document.getElementById("cpf").value = users.cpf;
}