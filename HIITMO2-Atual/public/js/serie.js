//pegando o form de serie
const form = document.querySelector("[id=form-serie]");

//passando para a pagina de cadastro de serie
form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let exercicio = form.exercicio.value, qtd = form.qtd.value, cpf = form.cpf.value, serie = form.serie.value, repeticoes = form.repeticoes.value;
    uid = form.uid.value;


    if(uid == "null"){
        const dados = {
            cpf: cpf,
            exercicio: exercicio,
            qtd: qtd,
            serie: serie,
            repeticoes: repeticoes
        }
        
        cadastraSerie(dados, uid);
    } else {
            const dados = {
            exercicio: exercicio,
            qtd: qtd,
            serie: serie,
            repeticoes: repeticoes
            }
            
            cadastraSerie(dados, uid);
    }
})

//mostra a series
function mostraSerie(serie, tipo){

    serie.forEach(serie => {
    
        let bloco = document.querySelector('.bloco-serie');
        let div = document.createElement('div');
        div.id = serie.uid;
        
        //criando os botões
        let btnAlterar = document.createElement('button');
        btnAlterar.innerHTML = "Alterar";

        let btnExcluir = document.createElement('button');
        btnExcluir.innerHTML = "Excluir";
        

        div.innerHTML = `
            <h1>${serie.serie}</h1>
        `
        bloco.append(div);

    
        bloco.appendChild(btnAlterar);
        bloco.appendChild(btnExcluir);
        

        div.addEventListener('click', () =>{
            console.log("click da div funfando");
        });
        //especificando o evento de click para o botão editar
        btnAlterar.addEventListener('click', () =>{
            document.getElementsByClassName("bloco-serie")[0].style.display = 'none';

            document.getElementById("div-form-serie").style.display = 'block';

            pegarDadoSerie(serie.uid);
        });

        //Exclui a div-usuario
        btnExcluir.addEventListener('click', (event) =>{
            event.stopPropagation();

            confirmDelet(serie);
        });
    });

}

//checa se o cpf existe e cadastra serie
function cadastraSerie(dados, uid){

    firebase.firestore().collection('user').where('cpf', '==', cpf.value).get().then((snapshot) =>{
        const user = snapshot.docs.map((doc) => doc.data());
        if(user.length > 0){
            console.log("cpf ja cadastrado");

            if(uid == "null"){

                firebase.firestore().collection('series').add(dados).then(() =>{
                    console.log("cadastrada");
                    window.location.reload();
                }).catch(()=>{
                    console.log("falhou1");
                });
            } else {
                firebase.firestore().collection('series').doc(uid).update(dados).then(() =>{
                    console.log("atualizada");
                    window.location.reload();
                }).catch(()=>{
                    console.log("falhou2");
                });
            }

        }else{
            console.log("cpf não cadastrado");
            return true;
        }
    })

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

//funções de preenchimento de form
function preencherSerie(dados, uid){
    document.getElementById("cpf").value = dados.cpf;
    document.getElementById("cpf").disabled = true;

    document.getElementById("exercicio").value = dados.exercicio;
    document.getElementById("qtd").value = dados.quantidade;
    document.getElementById("repeticoes").value = dados.repeticoes;
    document.getElementById("serie").value = dados.serie;
    document.getElementById("uid").value = uid;

}
//funções para deletar a serie selecionada
function removerSerie(serie){
    firebase.firestore().collection('series').doc(serie.uid).delete().then(()=>{
        document.getElementById(serie.uid).remove();
        window.location.reload();
    })
}

//confirma o delete
function confirmDelet(dado){
    console.log(dado);
    const showRemover = confirm(`Deseja excluir o ${dado.serie}`);

    if(showRemover){
        removerSerie(dado);

    }
}

//EVENTOS DO BOTOES DE SERIES/AULAS
document.getElementById("btn-novaSerie").onclick = function() {
    let divSerie = document.getElementsByClassName("bloco-serie");
    divSerie[0].style.display = 'none';

    let divPrincipal = document.getElementById("div-form-serie");
    divPrincipal.style.display = 'block';
}