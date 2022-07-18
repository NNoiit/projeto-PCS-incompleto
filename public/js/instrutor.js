firebase.auth().onAuthStateChanged(user =>{
    if(user){
      alunos(user);  
    }
});

firebase.firestore().collection("user").where('tipo', '==', 'instrutor').get().then((snapshot) =>{
    const users = snapshot.docs.map((doc) => doc.data());

    console.log(users);
    mostraInstrutores(users);
    
}).catch(error =>{
        console.log("erro" , error);
})


function mostraInstrutores(instrutor){

    instrutor.forEach(instrutor => {
        console.log(instrutor);
        let bloco = document.querySelector('#instrutores');
    
        let contUser = document.createElement('div');

        contUser.innerHTML = `
        
            <h1>${instrutor.nome}</h1>
            <h4>${instrutor.email}</h4>
            <h4>${instrutor.cpf}</h4>
        `
            bloco.append(contUser);
            
            console.log(bloco);
            console.log(contUser);
    });

}