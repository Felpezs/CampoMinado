"use strict";

// Validador de CPF adaptado de DevMedia https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function cpfIsValid(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

function dataValida(strData) {

  //Verifica se a data esta no padrão
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(strData)) {

  }
  else {
    return false;
  }

  var divisao = strData.split("/");
  var dia = parseInt(divisao[0], 10);
  var mes = parseInt(divisao[1], 10);
  var ano = parseInt(divisao[2], 10);

  if (ano < 1900 || ano > new Date().getFullYear() || mes == 0 || mes > 12) {
    return false;
  }

  var diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //Ano bixesto
  if (ano % 400 == 0 || (ano % 100 != 0 && ano % 4 == 0)) {
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

  getNome() {
    return this.nome;
  }
  getCpf() {
    return this.cpf;
  }
  getEmail() {
    return this.email;
  }
  getDataDeNascimento() {
    return this.dataDeNascimento;
  }
  getTelefone() {
    return this.telefone;
  }
  getPassword() {
    return this.password;
  }
  getUsername() {
    return this.username;
  }
  setNome(nomeUsuario) {
    if (nomeUsuario == "") {
      alert("Nome inválido")
    }
    else {
      this.nome = nomeUsuario;
      return this.nome
    }
  }
  setCpf(cpfUsuario) {
    if (cpfIsValid(cpfUsuario)) {
      this.cpf = cpfUsuario;
    }
    else {
      alert("CPF Invalido");
    }

  }
  setEmail(emailUsuario) {
    if (emailUsuario.includes("@")) {
      this.email = emailUsuario;
    }
    else {
      alert("Email Invalido")
    }
  }
  setDataDeNascimento(dataDeNascimentoUsuario) {
    if (dataValida(dataDeNascimentoUsuario)) {
      this.dataDeNascimento = dataDeNascimentoUsuario;
    }
    else {
      alert("Data Invalida")
    }
  }
  setTelefone(telefoneUsuario) {
    if (telefoneUsuario == "" || telefoneUsuario.length < 10) {
      alert("Telefone inválido")
    }
    else {
      this.telefone = telefoneUsuario;
      return this.telefone
    }
  }

  setPassword(passwordUsuario) {
    this.password = passwordUsuario;
  }
  setUsername(usernameUsuario) {
    this.username = usernameUsuario;
  }
}



function criarPessoa(nome, cpf, email, dataDeNascimento, telefone, password, username) {

  let pessoa = new Pessoa()
  let nome1 = pessoa.setNome(nome)
  let cpf1 = pessoa.setCpf(cpf)
  let email1 = pessoa.setEmail(email)
  let dataDeNascimento1 = pessoa.setDataDeNascimento(dataDeNascimento)
  let telefone1 = pessoa.setTelefone(telefone)
  let password1 = pessoa.setPassword(password)
  let username1 = pessoa.setUsername(username)

  SalvaPessoaNaSessao(pessoa)

}

function SalvaPessoaNaSessao(pessoa) {

  let nome = pessoa.getNome();
  let cpf = pessoa.getCpf();
  let dataDeNascimento = pessoa.getDataDeNascimento();
  let email = pessoa.getEmail();
  let username = pessoa.getUsername();
  let password = pessoa.getPassword();
  let telefone = pessoa.getTelefone();
  let objPessoa = { nome, cpf, dataDeNascimento, telefone, email, username, password };

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
    trocarTela()
  }
}


function criarConta() {

  let nomeInput = document.getElementById('nome').value
  let cpfInput = document.getElementById('cpf').value
  let emailInput = document.getElementById('email').value
  let dataNascInput = document.getElementById('dataNasc').value
  let telefoneInput = document.getElementById('telefone').value
  let senhaInput = document.getElementById('senha').value
  let confirmmarSenhaInput = document.getElementById('confirmarSenha').value

  //Verifica senhas
  if (senhaInput != confirmmarSenhaInput) {
    // console.log (senhaInput,confirmmarSenhaInput)
    return alert("Senhas não identicas.")
  }

  let usernameInput = document.getElementById('usuario').value

  criarPessoa(nomeInput, cpfInput, emailInput, dataNascInput, telefoneInput, senhaInput, usernameInput)
}

var tela = 0;

function trocarTela() {
  if (tela == 0) {
    document.getElementById("cadastrar").style.display = "flex";
    document.getElementById("entrar").style.display = "none";
    tela = 1;
  } else {
    document.getElementById("cadastrar").style.display = "none";
    document.getElementById("entrar").style.display = "flex";
    tela = 0;
  }
}

function criaCookieDeSessao(nome, valor, expDateMs) {
  valor = encodeURI(valor);

  if (expDateMs) {
    var data = new Date(expDateMs);
    // Converte a data para GMT
    data = data.toGMTString();
    // Codifica o valor do cookie para evitar problemas
    // Cria o novo cookie
    document.cookie = nome + '=' + valor + '; expires=' + data + '; path=/';
  }
  else {
    document.cookie = nome + '=' + valor + '; path=/';
  }
}

function efetuarLogin(ev) {
  let ajax = ev.target;
  if (ajax.readyState === XMLHttpRequest.DONE) {

    var responseData = JSON.parse(ajax.responseText);

    if (responseData.chave && responseData.usuario) {
      criaCookieDeSessao("usuario", responseData.usuario, responseData.expDateMs);
      criaCookieDeSessao("chave", responseData.chave, responseData.expDateMs);
      window.location.href = "./Screens/Dashboard/dashboard.html";
    }

  } else {
    // Ainda não terminou.
  }
}

function realizarLogin() {
  let usuario = document.getElementById("usuarioLogin").value;
  let senha = document.getElementById("senhaLogin").value;

  let json = JSON.stringify({ Username: usuario, Password: senha });
  let ajax = new XMLHttpRequest();

  //Qual requisicao sera feita e para onde
  ajax.open("POST", "php/Auth/login.php");

  //metodo chamado quando a requisicao for concluida
  ajax.addEventListener('readystatechange', efetuarLogin);

  //tipo de header que sera enviado na requisicao
  ajax.setRequestHeader('Content-Type', 'application/json');

  //tipo da resposta da requisicao
  //ajax.responseType = "json";

  //envio de requisicao
  ajax.send(json);

  /*
  try {

  if (usuario == JSON.parse(localStorage.getItem('usuario')).username  &&
      senha == JSON.parse(localStorage.getItem('usuario')).password) {
        window.location.href = './Screens/Dashboard/dashboard.html';
      } else {
        alert ("Nome de usuário ou senha incorreto(s)!")
      }

    } catch (err) {
      alert ("Nome de usuário ou senha incorreto(s)!")
    //alert ("Nenhum usuário encontrado no sistema. Cadastre-se")
  }*/

}


//Torna as funções visíveis para o HTML, para que possam ser chamados no onclick=""..."
//window.trocarTela = trocarTela;
//window.criarConta = criarConta;