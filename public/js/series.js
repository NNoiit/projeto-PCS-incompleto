function dbUser(tipo){
    //Pegadno os dados no firestore no caso aluno
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

console.log(tipoUser());
function mostraSerie(serie){

    serie.forEach(serie => {
        console.log(serie);
        let bloco = document.querySelector('.aluno');
    
        let div = document.createElement('div');

        div.innerHTML = `
        
            <h1>${serie.nome}</h1>
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
document.getElementById("btn-submit-aluno").onclick = function(event) {
    event.preventDefault();

    let bloco = document.querySelector('.instrutor');

    let div = document.createElement('div');

    div.innerHTML = `
        <div>
                
            <label for="serie">Digite o nome da sua serie:</label>
            <input type="text" name="serie" id="serie" placeholder="Serie" required="required">

            <label for="exercicio">Digite o nome do exercicio:</label>
            <input type="exercicio" name="exercicio" id="exercicio" placeholder="Exercicio" required="required">
            
            <label for="repeticoes">Digite o numero de repetições:</label>
            <input id="repeticoes" nome="repeticoes"></input>
            <p id="msgSerie"></p>
            
            <input type="submit" id="btn-submit-evento" value="Confirmar Serie" onclick="confirmar()">
        </div>
        `
    bloco.append(div);

    let divPrincipal = document.getElementsByClassName("cadastrar-serie");
        divPrincipal[0].style.display = 'none';
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
