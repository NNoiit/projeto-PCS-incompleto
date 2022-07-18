//pega os dados do formulario
const form = document.querySelector("[id=registrar-form]");

//verifica se o email é valido
function onEmail(){

    if(/\S+@\S+\.\S+/.test(email.value)){
        document.getElementById("atention").innerHTML = "Email valido";
    }else{
        document.getElementById("atention").innerHTML = "Email invalido";
    }

}

//verifica se os campos foram preenchidos
function formValid(){
    const nome = form.nome.value;
    if(!nome){
        return true;
    }

    const email = form.email.value;
    if(!email){
        return true;
    }

    const cpf = form.cpf.value;
    if(!cpf){
        return true;
    }

    return true;
}

//cadastra o usuario

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let nome = form.nome.value,
    email = form.email.value,
    cpf = form.cpf.value;
    
    let select = document.getElementById('tipo');
	let tipo = select.options[select.selectedIndex].value;
	console.log(tipo);


    //confirmar que os cmpos foram preenchidos
    if(!formValid()){
        document.getElementById("atention").innerHTML = "Preencha todos os campos!!";
    }else{
        const dados = {
        nome: nome,
        email: email,
        cpf: cpf,
        tipo: tipo,
        senha: cpf
        };
        
        firebase.auth().createUserWithEmailAndPassword(email, cpf).then(() =>{
            alert("Usuario cadastrado com sucesso!");

            //Resdireciona para pagina de instrutores
            if(tipo == 'instrutor'){
                window.location.href = "../instrutores.html";
            }
        
            //Redireciona para pagina de Alunos
            else if(tipo == 'aluno'){
                window.location.href = "../aluno.html";
            }

        }).catch(error => {
            alert("Erro ao cadastrar usuario!" , error);
        });

        firebase.firestore().collection('user').add(dados).then(() =>{
            console.log("te amo paula");
        }).catch(()=>{
            console.log("falhou");
        });
        
    }

    //Adicionando no firestore
})


    