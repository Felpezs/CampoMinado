"use strict";

// Validador de CPF adaptado de DevMedia https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function cpfIsValid(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

vvvvvvv

function dataValida(strData){

    //Verifica se a data esta no padrão
    if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(strData)){
        
    }
    else{
        return false;
    }

    var divisao =  strData.split("/");
    var dia = parseInt(divisao[0], 10); 
    var mes = parseInt(divisao[1], 10);
    var ano = parseInt(divisao[2], 10);

    if(ano < 1900 || ano > new Date ().getFullYear() || mes == 0 || mes > 12){
        return false;
    }

    var diasDoMes = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    //Ano bixesto
    if(ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0)){
        diasDoMes[1] = 29;
    }

    return dia > 0 && dia <= diasDoMes[mes - 1];
}


class Pessoa {
    constructor() {
      this.nome = '';
      this.cpf = '';
      this.email = '';
      this.dataDeNascimento = '';
      this.telefone = '';
      this.password = '';
      this.username = '';
     }

    getNome () {
      return this.nome;
    }
    getCpf(){
        return this.cpf;
    }
    getEmail(){
        return this.email;
    }
    getDataDeNascimento(){
        return this.dataDeNascimento;
    }
    getTelefone(){
        return this.telefone;
    }
    getPassword(){
        return this.password;
    }
    getUsername(){
        return this.username;
    }
    setNome(nomeUsuario){
        if(nomeUsuario == ""){
            alert("Nome inválido")
        }
        else{
        this.nome = nomeUsuario;  
        return this.nome
        }
    }
    setCpf(cpfUsuario){
        if(cpfIsValid(cpfUsuario)){
        this.cpf = cpfUsuario;
        }
        else{
            alert("cpfInvalido");
        }

    }
    setEmail(emailUsuario){
        if(emailUsuario.includes("@")){
        this.email = emailUsuario;
        }
        else{
            alert("Email Invalido")
        }
    }
    setDataDeNascimento(dataDeNascimentoUsuario){
        if(dataValida(dataDeNascimentoUsuario))
        {
        this.dataDeNascimento = dataDeNascimentoUsuario;
        }
        else{
            alert("Data Invalida")
        }
    }
    setTelefone(telefoneUsuario){
        if(telefoneUsuario == "" || telefoneUsuario.length < 10){
            alert("Telefone inválido")
        }
        else{
        this.telefone = telefoneUsuario;  
        return this.telefone
        }
    }

    setPassword(passwordUsuario){
        this.password = passwordUsuario;
    }
    setUsername(usernameUsuario){
        this.username = usernameUsuario;
    }
}



function resgatarPessoaDaSessao() {

  let localUserData = localStorage.getItem('usuario')

  if (!localUserData) return alert("Nenhum usuário encontrado na sessão!")

  let localUserDataJSON = JSON.parse(localUserData)

  let pessoa = new Pessoa()


  let nome1 = pessoa.setNome(localUserDataJSON.nome)
  let cpf1 = pessoa.setCpf(localUserDataJSON.cpf)
  let email1 = pessoa.setEmail(localUserDataJSON.email)
  let dataDeNascimento1 = pessoa.setDataDeNascimento(localUserDataJSON.dataDeNascimento)
  let telefone1 = pessoa.setTelefone(localUserDataJSON.telefone)
  let password1 = pessoa.setPassword(localUserDataJSON.password)
  let username1 = pessoa.setUsername(localUserDataJSON.username)

  return pessoa

}

function Preencher(){

  let pessoa = resgatarPessoaDaSessao()
  document.getElementById("nome").value = pessoa.getNome() 
  document.getElementById("dtNas").value = pessoa.getDataDeNascimento() 
  document.getElementById("telefone").value = pessoa.getTelefone() 
  document.getElementById("email").value = pessoa.getEmail() 
}

function salvaPessoaNaSessao (pessoa) {

  let pessoaOld = resgatarPessoaDaSessao()

  let nome = pessoa.getNome() || pessoaOld.getNome();
  let cpf = pessoa.getCpf() || pessoaOld.getCpf();
  let dataDeNascimento = pessoa.getDataDeNascimento() || pessoaOld.getDataDeNascimento();
  let email = pessoa.getEmail() || pessoaOld.getEmail();
  let username = pessoa.getUsername() || pessoaOld.getUsername();
  let password = pessoa.getPassword() || pessoaOld.getPassword();
  let telefone = pessoa.getTelefone() || pessoaOld.getTelefone;
  let objPessoa = { nome, cpf, dataDeNascimento, telefone, email, username, password};

  let existemElementosInvalidos = false;

  Object.keys(objPessoa).map((key) => {
    if (objPessoa[key] == '') {
      existemElementosInvalidos = true;
    }
  });

  if (existemElementosInvalidos) {
    // console.log("O usuário não foi criado pois existem elementos invalidos durante a criação")
  } else {
    localStorage.setItem('usuario', JSON.stringify(objPessoa));
    // console.log("O usuário foi registrado com sucesso")
  }
}

function atualizarDadosNaSessao(){

  let pessoa = resgatarPessoaDaSessao()

  let nome1 = document.getElementById("nome").value
  let dataDeNascimento1 = document.getElementById("dtNas").value
  let telefone1 = document.getElementById("telefone").value
  let email1 = document.getElementById("email").value
  let senhaInput = document.getElementById('senha').value
  let confirmmarSenhaInput = document.getElementById('confirmarSenha').value

  if(senhaInput != confirmmarSenhaInput ){
    return alert ("Senhas não identicas.")
  }
  let password1 = document.getElementById("senha").value

  pessoa.setNome(nome1)
  pessoa.setDataDeNascimento(dataDeNascimento1)
  pessoa.setTelefone(telefone1)
  pessoa.setEmail(email1)
  pessoa.setPassword(password1)
  
  salvaPessoaNaSessao(pessoa)

  alert("Dados atualizados com sucesso!")
}

//Quando clicar 

document.getElementById("lapisNome").addEventListener("click", function(){ 
  document.getElementById("nome").disabled = false; 
});

document.getElementById("lapisDtNas").addEventListener("click", function(){ 
  document.getElementById("dtNas").disabled = false; 
});

document.getElementById("lapisTelefone").addEventListener("click", function(){ 
  document.getElementById("telefone").disabled = false; 
});

document.getElementById("lapisEmail").addEventListener("click", function(){ 
  document.getElementById("email").disabled = false; 
});

document.getElementById("lapisSenha").addEventListener("click", function(){ 
  document.getElementById("senha").disabled = false; 
  document.getElementById("confirmarSenha").disabled = false;
});


Preencher()


//window.atualizarDadosNaSessao = atualizarDadosNaSessao

//Inserindo novas imagens em cache adaptado de <https://stackoverflow.com/questions/49349628/is-there-a-way-to-change-src-of-few-images-at-once-in-js>
const updateImage = (event) =>{
  if(event.target.files && event.target.files[0]){
    let img = document.querySelector(".posicionamento .fotoPerfil");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.height = 230;
    img.width = 230; 
  }
}

let insertImage = document.getElementById("image");
insertImage.addEventListener("change", updateImage);

