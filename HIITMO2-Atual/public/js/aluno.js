firebase.auth().onAuthStateChanged(user =>{
    if(user){
      alunos(user);  
    }
});

function alunos(user){
    firebase.firestore().collection("user").where('user.uid', '==', user.uid).get().then((snapshot) =>{
        const users = snapshot.docs.map((doc) => doc.data());
        preenchercampos(users[0]);
    }).catch(error =>{
            console.log("erro" , error);
        })
}

/*Nesta função devemos pegar todos os usuarios do tipo ALUNO*/

user[0].tipo.forEacht(alunos => {
    let bloco = document.querySelector('#alunos');

    if(alunos.tipo == "aluno"){
        bloco.innerHTML = `
        <div>
            <h1>${alunos.nome}</h1>
            <h4>${alunos.email}</h4>
            <h4>${alunos.cpf}</h4>
        <div>
        `

        document.querySelector('.alunos').append(aluno);
    }
});

