function pegarInfoDB(){
    firebase.firestore().collection("user").get().then((snapshot) =>{
        const users = snapshot.docs.map((doc) => doc.data());
        preenchercampos(users[0]);
    }).catch(error =>{
            console.log("erro" , error);
        })
}

function mostrarAlunos(){

    /*Nesta função devemos pegar todos os usuarios do tipo ALUNO*/
}