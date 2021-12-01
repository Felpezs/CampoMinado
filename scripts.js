"use strict";
import {
  Pessoa,
  criarPessoa,
  requisitarPessoa
} from './scripts/pessoa.js';

import {
  criarConta,
  salvaPessoaNaSessao,
  criaCookieDeSessao,
  efetuarLogin,
  logar
} from './scripts/autentificacao.js';

import {
  cpfValido,
  dataValida,
} from './scripts/validadores.js';



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

//Torna as funções visíveis para o HTML, para que possam ser chamados no onclick=""..."
window.trocarTela = trocarTela;
window.criarConta = criarConta;
window.logar = logar;

export {trocarTela};