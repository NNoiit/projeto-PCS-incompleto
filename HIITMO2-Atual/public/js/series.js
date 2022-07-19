function dbUser(tipo){
    //Pegando os dados no firestore no caso aluno
    if(tipo == "aluno"){
        firebase.firestore().collection("series").where('email', '==', user.email).get().then((snapshot) =>{
            const serie = snapshot.docs.map((doc) => doc.data());

            mostraSerie(serie);
            
        }).catch(error =>{
                console.log("erro" , error);
        })
    }

    //Pegadno os dados no firestore no caso do instrutor
    if(tipo == "instrutor"){
        firebase.firestore().collection("series").get().then((snapshot) =>{
            const serie = snapshot.docs.map((doc) => doc.data());

            mostraSerie(serie);
            
        }).catch(error =>{
                console.log("erro" , error);
        })
    }
}

function mostraSerie(serie){

    serie.forEach(serie => {
        console.log(serie);
        let bloco = document.querySelector('.aluno');
    
        let div = document.createElement('div');

        div.innerHTML = `
            <h1>${serie.nome}</h1>
            <button class="fab fixed bottom right" id=""btn-novaSerie"">+</button>
        `
            bloco.append(div);
            
            console.log(div);
            console.log(div);
    });

}

//cadastro das series no firestore
/*form.addEventListener('submit', (event)=>{

    event.preventDefault();

    const dados = {
        email: email,
        nome: nome
    }
    firebase.firestore().collection('series').add(dados).then(() =>{
        console.log("cadastrada");
    }).catch(()=>{
        console.log("falhou");
    });
    
})*/

//////////////////////////////////////////////////////////////////

//funções para controle da pagina
document.getElementById("btn-novaSerie").onclick = function() {
    let divPrincipal = document.getElementsByClassName("cadastrar-serie");
        divPrincipal[0].style.display = 'block';
}

function confirmar() {

    let bloco = document.querySelector('.instrutor');

    let div = document.createElement('div');

    div.innerHTML = `  
        <div> 
            <h1>Você deseja manter a serie cadastrada?</h1>
            <br>
            <button id="confirmar" class="btn-medio" onclick="">Confirmar</button>
            <button id="concelar" class="btn-medio" onclick="">Cancelar</button>
        </div>
        `
    bloco.append(div);

}
