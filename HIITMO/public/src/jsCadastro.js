const form = document.querySelector("registrar-form");

function geral(){

    let nome = form.nome.value,
    email = form.email.value,
    cpf = form.cpf.value,   
    matricula = form.matricula.value,
    senha = form.senha.value,
    senha2 = form.senhaConfirma.value;

    //Banco de dados
    let dados = {
        nome: nome,
        email: email,
        cpf: cpf,
        matricula: matricula,
        senha: senha
    };
    
    let bancoDados = Object.keys(localStorage);

    //Verivicação de senha
    if (senha != "" && senha2 != "") {
        confirmaçãoSenha(senha, senha2);
    }

    function confirmaçãoSenha(senha1, senha2) {
        if (senha1 != senha2) {
            document.getElementById("Psenha").innerHTML = "<font color='red'>Senhas não correspondentes!!!</font>";
            document.getElementById("senhaConfirma").value = "";
            return document.getElementById("senha").value = "";
        }
        else{
            return senhaFort(senha);
        }
    }

    function senhaFort(test) {
        var d = document.getElementById("Psenha");
        ERaz = /[a-z]/;
        ERAZ = /[A-Z]/;
        ER09 = /[0-9]/;
        ERxx = /[@!#$%&*+=?|-]/;
    
        if (test.length == "") {
            d.innerHTML = "Segurança da senha: !";
        } else {
            if (test.length < 5) {
                d.innerHTML = "Segurança da senha: <font color=\'red\'> BAIXA</font>";
            } else {
                if (test.length > 7 && test.search(ERaz) != -1 && test.search(ERAZ) != -1 && test.search(ER09) != -1 || test.length > 7 && test.search(ERaz) != -1 && test.search(ERAZ) != -1 && test.search(ERxx) || test.length > 7 && test.search(ERaz) != -1 && test.search(ERxx) != -1 && test.search(ER09) || test.length > 7 && test.search(ERxx) != -1 && test.search(ERAZ) != -1 && test.search(ER09)) {
                    d.innerHTML = "Segurança da senha: <font color=\'green\'> ALTA</font>";
                } else {
                    if (test.search(ERaz) != -1 && test.search(ERAZ) != -1 || test.search(ERaz) != -1 && test.search(ER09) != -1 || test.search(ERaz) != -1 && test.search(ERxx) != -1 || test.search(ERAZ) != -1 && test.search(ER09) != -1 || test.search(ERAZ) != -1 && test.search(ERxx) != -1 || test.search(ER09) != -1 && test.search(ERxx) != -1) {
                        d.innerHTML = "Seguranca da senha: <font color=\'orange\'> MEDIA</font>";
                    } else {
                        d.innerHTML = "Segurança da senha: <font color=\'red\'> BAIXA</font>";
                    }
                }
            }
        }
    }

}