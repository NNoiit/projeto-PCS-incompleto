//pegando o form de serie
const form = document.querySelector("[id=form-serie]");

firebase.auth().onAuthStateChanged(user =>{
    if(user){
      dbUser(user);  
    }
});

function dbUser(tipo){
    //Pegando os dados no firestore no caso aluno
    firebase.firestore().collection('user').where('tipo', '==', tipo.email).get().then((snapshot) =>{
        const user = snapshot.docs.map((doc) => doc.data());

        console.log(user[0]);
        console.log(user[0].tipo);
        if(user[0].tipo == "aluno"){
            firebase.firestore().collection("series").where('cpf', '==', user.cpf).get().then((snapshot) =>{
                const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
                let btnEscondido = document.getElementsById("btn-novaSerie");
            btnEscondido.style.display = 'none';
            
            mostraSerie(serie);
                
            }).catch(error =>{
                    console.log("erro" , error);
            })
        }

        //Pegadno os dados no firestore no caso do instrutor
        if(user[0].tipo == "instrutor"){
            firebase.firestore().collection("series").get().then((snapshot) =>{
                const serie = snapshot.docs.map((doc) => ({...doc.data(), uid: doc.id}));
                mostraSerie(serie);
                
            }).catch(error =>{
                    console.log("erro" , error);
            })
        }
    })
}

function mostraSerie(serie){

    serie.forEach(serie => {
        console.log(serie);
        let bloco = document.querySelector('.aluno');
        let div = document.createElement('div');
        div.id = serie.uid;
        
        //criando os botões
        let btnAlterar = document.createElement('button');
        btnAlterar.innerHTML = "Alterar";

        let btnExcluir = document.createElement('button');
        btnExcluir.innerHTML = "Excluir";
        

        div.innerHTML = `
            <h1>${serie.nome}</h1>
        `
        bloco.append(div);
        
        div.addEventListener('click', () =>{
            
        })
        //especificando o evento de click para o botão editar
        btnAlterar.addEventListener('click', () =>{
            window.location.href = "../cadastro-serie.html?uid=" + instrutor.uid;
        });

        //Exclui a div-usuario
        btnExcluir.addEventListener('click', (event) =>{
            event.stopPropagation();

            confirmDelet(serie);
        });
    });

}

//passando para a pagina de cadastro de serie
form.addEventListener('submit', (event)=>{

    event.preventDefault();
    let exercicio = form.exercicio.value, cpf = form.cpf.value, serie = form.serie.value, repeticoes = form.repeticoes.value;
    const dados = {
        cpf: cpf,
        exercicio: exercicio,
        serie: serie,
        repeticoes: repeticoes
    }
    checkCpf(dados);
})

//////////////////////////////////////////////////////////////////

//funções para controle da pagina
document.getElementById("btn-novaSerie").onclick = function() {
    let divPrincipal = document.getElementById("div-form-serie");
        divPrincipal.style.display = 'block';
}

function checkCpf(dados){

    firebase.firestore().collection('user').where('cpf', '==', cpf.value).get().then((snapshot) =>{
        const user = snapshot.docs.map((doc) => doc.data());
        if(user.length > 0){
            console.log("cpf ja cadastrado");
            firebase.firestore().collection('series').add(dados).then(() =>{
                console.log("cadastrada");
                window.location.href = "../serie.html";
            }).catch(()=>{
                console.log("falhou");
            });
        }else{
            console.log("cpf não cadastrado");
            return true;
        }
    })

}

//função para deletar a serie selecionada
function removerAluno(serie){
    firebase.firestore().collection('user').doc(serie.uid).delete().then(()=>{
        document.getElementById(serie.uid).remove();
    })
}

//confirma o delete
function confirmDelet(serie){
    const showRemover = confirm(`Deseja excluir o ${serie.nome}`);

    if(showRemover){
        removerAluno(serie);
    }
}