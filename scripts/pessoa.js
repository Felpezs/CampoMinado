"use strict";
import { salvaPessoaNaSessao } from './autentificacao.js';
import { cpfValido, dataValida} from './validadores.js';

class Pessoa {
    constructor (nome, cpf, email, dataNasc, telefone, password, username){
        if(!nome)
            throw "Campo Nome inválido";

        if(!cpfValido(cpf))
            throw "Campo CPF inválido";

        if(!email && !emailUsuario.includes("@"))
            throw "Campo Email inválido";

        if(!dataValida(dataNasc))
            throw "Campo data de nascimento invalido";
          
        if(!telefone || telefone.length < 10)
          throw "Campo telefone inválido";

        if(!password)
            throw "Campo password inválido";

        if(!username)
            throw "Campo username invalido";
        
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataDeNascimento = dataNasc;
        this.telefone = telefone;
        this.password = password;
        this.username = username;
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
        throw "Campo Nome inválido";
      }
      else {
        this.nome = nomeUsuario;
      }
    }

    setEmail(emailUsuario) {
      if (emailUsuario.includes("@")) {
        this.email = emailUsuario;
      }
      else {
        throw "Campo Email inválido";
      }
    }
    setDataDeNascimento(dataDeNascimentoUsuario) {
      if (dataValida(dataDeNascimentoUsuario)) {
        this.dataDeNascimento = dataDeNascimentoUsuario;
      }
      else {
        throw "Campo data de nascimento invalido";
      }
    }
    setTelefone(telefoneUsuario) {
      if (telefoneUsuario == "" || telefoneUsuario.length < 10) {
        throw "Campo Telefone inválido"
      }
      else {
        this.telefone = telefoneUsuario;
      }
    }
  
    setPassword(passwordUsuario) {
      if(!passwordUsuario){
        throw "Campo password inválido";
      }
      this.password = passwordUsuario;
    }

    setUsername(usernameUsuario) {
      if(!usernameUsuario)
        throw "Campo username invalido";

      this.username = usernameUsuario;
    }
}

function criarPessoa(ev) {
    let ajax = ev.target;
  
    if(ajax.readyState === XMLHttpRequest.DONE){
      if(ajax.status === 201){
          var responseData = JSON.parse(ajax.responseText);
          let nome = responseData.nome;
          let cpf = responseData.cpf;
          let email = responseData.email;
          let dataNasc = responseData.dataNasc;
          let telefone = responseData.telefone;
          let password = responseData.password;
          let username = responseData.username;

          let pessoa = new Pessoa(nome, cpf, email, dataNasc, telefone, password, username);
          salvaPessoaNaSessao(pessoa)
      }
      else{
        alert(responseData.message);
      }
    }
  }

  function requisitarPessoa(chave, username){
    
    let json = JSON.stringify({Username: username, Chave: chave});
    let ajax = new XMLHttpRequest();
    ajax.open("POST", "php/Auth/getUser.php");
    ajax.addEventListener('readystatechange', criarPessoa);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(json);

    window.location.href = "./Screens/Dashboard/dashboard.html";
  }
  
export {
    Pessoa,
    criarPessoa,
    requisitarPessoa
 }