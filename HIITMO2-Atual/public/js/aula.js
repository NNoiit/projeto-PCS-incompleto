/////////////// FUNÇÕES PARA GERENCIAR AS AULAS //////////////////////


///////////////////////// FUNÇÕES PARA MOSTRAR AULAS //////////////////

function dbUser(tipo){
    //Pegadno os dados no firestore no caso aluno
    if(tipo == "aluno"){
        firebase.firestore().collection("aulas").where('email', '==', user.email).get().then((snapshot) =>{
            const aulas = snapshot.docs.map((doc) => doc.data());

            mostraAulas(aulas);
            
        }).catch(error =>{
                console.log("erro" , error);
        })
    }

    //Pegadno os dados no firestore no caso do instrutor
    if(tipo == "instrutor"){
        firebase.firestore().collection("aulas").get().then((snapshot) =>{
            const aulas = snapshot.docs.map((doc) => doc.data());

            mostraaulas(aulas);
            
        }).catch(error =>{
                console.log("erro" , error);
        })
    }
}

function mostraAulas(aulas){

    aulas.forEach(aulas => {
        console.log(aulas);
        let bloco = document.querySelector('.aluno');
    
        let div = document.createElement('div');

        div.innerHTML = `
        
            <h1>${aulas.nome}</h1>
        `
            bloco.append(div);
            
            console.log(div);
            console.log(div);
    });

}