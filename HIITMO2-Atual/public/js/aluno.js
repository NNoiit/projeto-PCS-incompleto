function pegarInfoDB(){
    firebase.firestore().collection("user").get().then((snapshot) =>{
        const users = snapshot.docs.map((doc) => doc.data());
        preenchercampos(users[0]);
    }).catch(error =>{
            console.log("erro" , error);
        })
}

/*Nesta função devemos pegar todos os usuarios do tipo ALUNO*/

user[0].tipo.forEacht(alunos => {
    let aluno = document.createElement('h1');

    aluno.innerHTML = `
        <h1>${alunos.nome}</h1>
        <h4>${alunos.email}</h4>
        <h4>${alunos.cpf}</h4>
    `

    document.querySelector('.alunos').append(aluno);
});

