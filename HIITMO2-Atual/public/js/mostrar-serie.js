//////////////////////////////////////////

//mostra a series
function mostraSerie(serie){

    serie.forEach(serie => {
    
        let bloco = document.querySelector('.bloco-serie');
        let div = document.createElement('div');
        div.id = serie.uid;

        div.innerHTML = `
            <h1>${serie.serie}</h1>
        `
        bloco.append(div);
        bloco.appendChild(btnInscrever);
        btnInscrever.classList.add('btn-geral');

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


