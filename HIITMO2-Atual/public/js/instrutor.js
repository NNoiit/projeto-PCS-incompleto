function instrutores(){
    firebase.firestore().collection("user").where('tipo', '==', 'instrutor').get().then((snapshot) =>{
        const users = snapshot.docs.map((doc) => doc.data());

        console.log(users);
        mostraInstrutores(users);
        
    }).catch(error =>{
            console.log("erro" , error);
        })
}

function mostraInstrutores(instrutor){

    for(let i = 0; i > instrutor.length; i++ ) {
        instrutor[i];
        console.log(instrutor[i]);
        let bloco = document.querySelector('#instrutores');
            bloco.innerHTML = `
            <div>
                <h1>${instrutor.nome}</h1>
                <h4>${instrutor.email}</h4>
                <h4>${instrutor.cpf}</h4>
            <div>
            `
            //document.querySelector('.instrutor').append(aluno);
    };

}