var cpfGlobal = 0, cont= 0;
firebase.auth().onAuthStateChanged(user =>{
    if(user){
        cpfGlobal = user;
        pegarInfoDB(cpfGlobal);
    }
});

//pegando as informações do BD
function pegarInfoDB(email){

    firebase.firestore().collection("user").where("email", "==", email.email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());
        //alterando o valor da variavel global para obter o cpf do usuario
        cpfGlobal = users[0].cpf;

    }).catch(error =>{
            console.log("erro" , error);
    })
}

function mostraAula(aula){
        let data = aula.data();
        let inscr = data.inscritos;
        cont = cont + 1;

        console.log(cpfGlobal);

    if(inscr[cont] == cpfGlobal){
        console.log("foi");
        let bloco = document.querySelector('.bloco-aula');
        let div = document.createElement('div');
        div.id = data.uid;

        div.innerHTML = `
            <h1>${data.aula}</h1>
            <h4>${data.date}</h4>
            <h2>${data.lotacao}</h2>
        `
        bloco.append(div);

        div.addEventListener('click', () =>{
            console.log("div clicada");
        })
    }
}


//Função para pegar os dado no db apartir do uid
function pegarDadoAula(uid){

    firebase.firestore().collection("aulas").doc(uid).get().then(doc =>{

        if(doc.exists){
            preencherAula(doc.data(), uid);
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}