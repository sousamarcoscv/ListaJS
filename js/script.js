class Pessoa {

    constructor() {
        this.id=1;
        this.arrayFamilia = [];
    }   

    salvarPessoa() {
        let pessoa = this.lerDados();
        if(this.validaCampos(pessoa)){
            this.adicionarPessoa(pessoa);
            console.log("Adicionado com Sucesso");
        }
        this.listarTabela();
    }

    lerDados(){
        let pessoa = {};
        pessoa.Id = this.id;
        pessoa.nomePessoa = document.querySelector("#nome").value;
        pessoa.idadePessoa = document.querySelector("#idade").value;
        return pessoa;
    }

    listarTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerText='';
        for(let f in this.arrayFamilia){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nomePessoa = tr.insertCell();
            let td_idadePessoa = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.arrayFamilia[f].Id;
            td_nomePessoa.innerText = this.arrayFamilia[f].nomePessoa;
            td_idadePessoa.innerText = this.arrayFamilia[f].idadePessoa;

        }
    }

    adicionarPessoa(pessoa){
        this.arrayFamilia.push(pessoa);
        this.id++;
    }

    validaCampos(pessoa){
        let msg = '';
            if(pessoa.nomePessoa == ''){
                msg += ' - Informe o Nome da Pessoa\n';
            }
            if(pessoa.idadePessoa == ''){
                msg += ' - Informe a Idade\n';
            }
            if(parseInt(pessoa.idadePessoa) > 120){
                msg += ' - Certamente voce já morreu\n';
            }

            if(msg != ''){
                alert(msg);
                return false;
            }

        return true;
    }

    cancelarPessoa() {
        alert("Pessoa Deletada");
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }
}
let pessoa = new Pessoa();

