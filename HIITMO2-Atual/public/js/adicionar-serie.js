class adicionarSerie{
    constructor() {
        this.arraySerie = [];
    }

    salvar(){
        let serie = this.lerDados();
        if(this.validaCampos(serie)){
            this.adicionar(serie);
        }
        this.listarTabela();
        this.limpar();
    }

    listarTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText='';

        for (let i = 0; i < this.arraySerie.length; i++) {
            let tr = tbody.insertRow();

            let td_serie = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_repeticao = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_serie.innerText = this.arraySerie[i].exercicio;
            td_quantidade.innerText = this.arraySerie[i].quantidade;
            td_repeticao.innerText = this.arraySerie[i].repeticoes;

            let imgExcluir = document.createElement('img');
            imgExcluir.src = 'img/excluir.png';
            imgExcluir.setAttribute("onclick","seriev.excluir("+this.arraySerie[i]+")");

            td_acoes.appendChild(imgExcluir);
        }
    }
    adicionar(serie){
        this.arraySerie.push(serie);
    }
    lerDados(){
        let serie = {}
        serie.exercicio = document.getElementById('exercicio').value;
        serie.quantidade = document.getElementById('qtd').value;
        serie.repeticoes = document.getElementById('repeticoes').value;

        return serie;
    }
    validaCampos(serie){
        let msg = '';
        if (serie.exercicio==''){
            msg += 'Campo exercicio esta vazio';
        }
        if (serie.quantidade==''){
            msg += 'Campo quantidade esta vazio';
        }
        if (serie.repeticoes==''){
            msg += 'Campo repetiçoes esta vazio';
        }
        if (msg!=''){
            alert(msg);
            return false;
        }
        return true;
    }
    limpar(){

        document.getElementById('exercicio').value='';
        document.getElementById('qtd').value='';
        document.getElementById('repeticoes').value='';
    }
    excluir(id){
        for(let i = 0; i<this.arraySerie.length; i++){
            if (this.arraySerie[i].id==id){
                this.arraySerie.splice(i, 1);
            }
        }

    }


}
var seriev = new adicionarSerie();
