import { trocarTela } from './autentificacao.js';

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

/**
 * Armazena um usuário no localStorage
 * @param {number} id 
 * @param {string} nome 
 * @param {string} dataNascimento 
 * @param {number} telefone 
 * @param {string} email 
 * @param {string} username 
 */
function armazenaUser(id, nome, dataNascimento, telefone, email, username) {
    let user = {id, nome, dataNascimento, telefone, email, username};
    
    localStorage.setItem('usuario', JSON.stringify(user));
    trocarTela();
}

export {criaCookieDeSessao, armazenaUser};