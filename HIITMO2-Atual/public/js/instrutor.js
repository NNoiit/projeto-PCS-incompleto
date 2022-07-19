
//Pegadno os dados do tipo INSTRUTOR no firestore
firebase.firestore().collection("user").where('tipo', '==', 'instrutor').get().then((snapshot) =>{
    const users = snapshot.docs.map((doc) => doc.data());
    mostraInstrutores(users);
    
}).catch(error =>{
        console.log("erro" , error);
})

//função para criar as divs dos INSTRUTORES no firestore
function mostraInstrutores(instrutor){

    instrutor.forEach(instrutor => {
        let bloco = document.querySelector('#instrutores');
    
        let div = document.createElement('div');

        div.innerHTML = `
            <h1>${instrutor.nome}</h1>
            <h4>${instrutor.email}</h4>
            <h4>${instrutor.cpf}</h4>
            <button type="button">Editar</button>
        `
            bloco.append(div);

            //especificando o evento de click para o botão editar
            div.addEventListener('click', () =>{
                window.location.href = "../cadastro.html?email=" + instrutor.email;
            });
    });

}

//Função para verificar se o instrutor esta no BD
function verificaInstrutor(instrutor){

}

//função para deletar o instrutor
function deletarInstrutor(instrutor){}