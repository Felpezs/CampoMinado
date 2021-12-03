"use strict";
import { armazenaUser } from './session.js';
import { cpfValido, dataValida} from './validadores.js';

class Pessoa {
    constructor (id, nome, email, dataNasc, telefone, username){
        if(!id)
          throw "ID inválido";
        if(!nome)
            throw "Nome inválido";

        if(!email && !emailUsuario.includes("@"))
            throw "Email inválido";

        if(!dataValida(dataNasc))
            throw "Data de nascimento invalida";
          
        if(!telefone || telefone.length < 10)
          throw "Campo telefone inválido";

        if(!username)
            throw "Campo username invalido";
        
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.dataDeNascimento = dataNasc;
        this.telefone = telefone;
        this.username = username;
    }

    getNome() {
      return this.nome;
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
}

function instanciarPessoa(ev) {
    let ajax = ev.target;
  
    if(ajax.readyState === XMLHttpRequest.DONE){
      if(ajax.status === 201){
          var responseData = JSON.parse(ajax.responseText);
          let id = responseData.id;
          let nome = responseData.nome;
          let email = responseData.email;
          let dataNasc = responseData.dataNasc;
          let telefone = responseData.telefone;
          let username = responseData.username;

          armazenaUser(id, nome, dataNasc, telefone, email, username);
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
    ajax.addEventListener('readystatechange', instanciarPessoa);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(json);

    window.location.href = "./Screens/Dashboard/dashboard.html";
  }
  
export {Pessoa, instanciarPessoa, requisitarPessoa};