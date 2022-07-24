firebase.auth().onAuthStateChanged(user =>{
    if(user){
      pegarInfoDB(user);  
    }
});

//pegando as informações do BD
function pegarInfoDB(email){

    firebase.firestore().collection("user").where("email", "==", email.email).get().then(snapshot =>{
        const users = snapshot.docs.map(doc => doc.data());

        infoSerie(users[0]);
        
    }).catch(error =>{
            console.log("erro" , error);
    })

}

function infoSerie(cpf){

    firebase.firestore().collection("series").where('cpf', '==', cpf.cpf).get().then((snapshot) =>{
        const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));

        mostraSerie(serie);
        
    }).catch(error =>{
            console.log("erro" , error);
    })
}

//mostra a series
function mostraSerie(serie){

    serie.forEach(serie => {
    
        let bloco = document.querySelector('.bloco-serie');
        let div = document.createElement('div');
        div.id = serie.uid;
        div.classList.add('bloco-cont');

        div.innerHTML = `
            <h1>${serie.serie}</h1>
        `
        bloco.append(div);

        div.addEventListener('click', () =>{
            console.log("click da div funfando");
        });

    });

}

//função para pegar os dados no db apartir do uid
function pegarDadoSerie(uid){

    firebase.firestore().collection("series").doc(uid).get().then(doc =>{

        if(doc.exists){
            preencherSerie(doc.data(), uid);
        }else{
            console.log("Não existe");
            window.location.href = "../instrutores.html";
        }
    }).catch(error =>{
            console.log("erro" , error);
    }
    )
}

