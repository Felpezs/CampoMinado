import {
  Pessoa,
  criarPessoa,
  requisitarPessoa
} from './pessoa.js';

import { trocarTela } from '../scripts.js';

function createUserResponse(ev){
  let ajax = ev.target;

  if(ajax.readyState === XMLHttpRequest.DONE){
    if(ajax.status === 200){
      trocarTela();
    }
  }
}

function criarConta() {
    let usernameInput = document.getElementById('usuario').value
    let nomeInput = document.getElementById('nome').value
    let cpfInput = document.getElementById('cpf').value
    let emailInput = document.getElementById('email').value
    let dataNascInput = document.getElementById('dataNasc').value
    let telefoneInput = document.getElementById('telefone').value
    let senhaInput = document.getElementById('senha').value
    let confirmmarSenhaInput = document.getElementById('confirmarSenha').value
  
    //Verifica senhas
    if (senhaInput != confirmmarSenhaInput) {
      return alert("Senhas não identicas.")
    }
    
    let ajax = new XMLHttpRequest();
    let json = JSON.stringify({Username: usernameInput, Nome: nomeInput, Cpf: cpfInput, Email: emailInput, DataNasc: dataNascInput, Telefone: telefoneInput, Senha: senhaInput});

    ajax.open("POST", "php/DB/createUser.php");
    ajax.addEventListener('readystatechange', createUserResponse);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(json);
  }

  function salvaPessoaNaSessao(pessoa) {

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
  
      if (ajax.status === 201){
        criaCookieDeSessao("usuario", responseData.usuario, responseData.expDateMs);
        criaCookieDeSessao("chave", responseData.chave, responseData.expDateMs);
        requisitarPessoa(responseData.chave, responseData.usuario);
        
      }
      else
        alert(responseData.message);
    }
  }

  function logar() {
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

  export {
    criarConta,
    salvaPessoaNaSessao,
    criaCookieDeSessao,
    efetuarLogin,
    logar
 }