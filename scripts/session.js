import { trocarTela } from '../autentificacao.js';
import {Pessoa} from './pessoa.js';

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

function armazenaPessoa(pessoa) {
    let nome = pessoa.getNome();
    let cpf = pessoa.getCpf();
    let dataDeNascimento = pessoa.getDataDeNascimento();
    let email = pessoa.getEmail();
    let username = pessoa.getUsername();
    let password = pessoa.getPassword();
    let telefone = pessoa.getTelefone();
    let objPessoa = { nome, cpf, dataDeNascimento, telefone, email, username, password };
    
    localStorage.setItem('usuario', JSON.stringify(objPessoa));
    trocarTela();
}

export {criaCookieDeSessao, armazenaPessoa};