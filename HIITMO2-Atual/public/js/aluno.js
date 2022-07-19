firebase.auth().onAuthStateChanged(user =>{
    if(user){
      alunos(user);  
    }
});

//Pegadno os dados do tipo ALUNO no firestore
firebase.firestore().collection("user").where('tipo', '==', 'aluno').get().then((snapshot) =>{
    const users = snapshot.docs.map((doc) => doc.data());

    console.log(users);
    mostraAlunos(users);
    
}).catch(error =>{
        console.log("erro" , error);
})

//função para criar as divs dos alunos no firestore
function mostraAlunos(aluno){

    aluno.forEach(aluno => {
        let bloco = document.querySelector('#alunos');
    
        let div = document.createElement('div');

        div.innerHTML = `
            <h1>${aluno.nome}</h1>
            <h4>${aluno.email}</h4>
            <h4>${aluno.cpf}</h4>
        `
            bloco.append(div);

    });

}
