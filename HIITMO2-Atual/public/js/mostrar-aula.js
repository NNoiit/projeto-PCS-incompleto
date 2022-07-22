var cpfGlobal;
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


//Motrando as aulas
firebase.firestore().collection("aulas").get().then((snapshot) =>{
    const aula = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
    
    mostrarInscritas(aula);
}).catch(error =>{
        console.log("erro" , error);
})

function mostraAula(aula){

    aula.forEach(aula => {

        //
        btnInscrever.addEventListener('click', () =>{
            inscreverAula(aula);
        })
    });
}

function mostrarInscritas(aula){
    console.log(aula);
    let  inscri;
    console.log(cpfGlobal.email);

    for(let i = 1; i <= aula.length; i++){
        inscri = aula[i].inscritos;
        console.log(inscri);
        
            if(inscri.equals(cpfGlobal)){
                let bloco = document.querySelector('.bloco-aula');
            let div = document.createElement('div');
            div.id = aula.uid;
        
            //criando os botões
            let btnInscrever= document.createElement('button');
            btnInscrever.innerHTML = "Inscrever";
        
        

            div.innerHTML = `
                <h1>${aula.aula}</h1>
                <h4>${aula.date}</h4>
                <h2>${aula.lotacao}</h2>
                `
            bloco.append(div);
            bloco.appendChild(btnInscrever);
        

            div.addEventListener('click', () =>{
                console.log("div clicada");
            })
                }
            
    }
    
}