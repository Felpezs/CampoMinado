"use strict";

//Area de partidas

var partidas = [
  {
    "id": "1",
    "data": "01/01/2001",
    "bombas": "15",
    "grid" : "4x4",
    "modalidade" : "classico",
    "tempo": "45",
    "resultado": "derrota",
    "points": "0"
  },
  {
    "id": "2",
    "data": "04/05/2006",
    "bombas": "21",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "123",
    "resultado": "vitoria",
    "points": "79"
  },
  {
    "id": "3",
    "data": "21/05/2004",
    "bombas": "27",
    "grid" : "7x7",
    "modalidade" : "classico",
    "tempo": "245",
    "resultado": "derrota",
    "points": "0"
  },
  {
    "id": "4",
    "data": "21/08/2006",
    "bombas": "21",
    "grid" : "5x5",
    "modalidade" : "classico",
    "tempo": "127",
    "resultado": "vitoria",
    "points": "76"
  },
  {
    "id": "5",
    "data": "05/05/2004",
    "bombas": "14",
    "grid" : "4x4",
    "modalidade" : "rivotril",
    "tempo": "562",
    "resultado": "vitoria",
    "points": "26"
  },
  {
    "id": "6",
    "data": "04/02/2021",
    "bombas": "17",
    "grid" : "9x9",
    "modalidade" : "classico",
    "tempo": "456",
    "resultado": "derrota",
    "points": "0"
  },
  {
    "id": "7",
    "data": "10/10/2010",
    "bombas": "5",
    "grid" : "10x10",
    "modalidade" : "classico",
    "tempo": "453",
    "resultado": "derrota",
    "points": "0"
  },
  {
    "id": "8",
    "data": "11/11/2011",
    "bombas": "30",
    "grid" : "12x12",
    "modalidade" : "classico",
    "tempo": "70",
    "resultado": "vitoria",
    "points": "34"
  },
  {
    "id": "9",
    "data": "12/12/2012",
    "bombas": "9",
    "grid" : "10x20",
    "modalidade" : "rivotril",
    "tempo": "103",
    "resultado": "vitoria",
    "points": "7"
  },
  {
    "id": "10",
    "data": "09/09/2009",
    "bombas": "7",
    "grid" : "9x9",
    "modalidade" : "rivotril",
    "tempo": "200",
    "resultado": "vitoria",
    "points": "7"
  },
  {
    "id": "11",
    "data": "05/04/2002",
    "bombas": "87",
    "grid" : "20x20",
    "modalidade" : "classico",
    "tempo": "6000",
    "resultado": "derrota",
    "points": "0"
  },
  {
    "id": "12",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "13",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "14",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "15",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "16",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "17",
    "data": "20/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "18",
    "data": "17/08/2020",
    "bombas": "18",
    "grid" : "5x5",
    "modalidade" : "rivotril",
    "tempo": "5",
    "resultado": "vitoria",
    "points": "2401"
  },
  {
    "id": "19",
    "data": "19/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "20",
    "data": "20/08/2020",
    "bombas": "18",
    "grid" : "25x25",
    "modalidade" : "rivotril",
    "tempo": "625",
    "resultado": "vitoria",
    "points": "1"
  },
  {
    "id": "21",
    "data": "21/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  },
  {
    "id": "22",
    "data": "21/08/1998",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "167"
  }
]

//Fim Area de partidas

//Area ordenacoes

/**
 * @param {Boolean} type true: ordem decrescente, false: ordem crescente
 */
 const orderByDate = (data, type) => {
  //Ordem decrescente
  if(type)
      return data.sort(compareDate).reverse();
  //Ordem crescente
  else if(!type)
      return data.sort(compareDate);
  else
      throw "Invalid argument";
}

const orderByTime = (data, type) => {
  //Ordem decrescente
  if(type)
      return data.sort(compareTime).reverse();
  //Ordem crescente
  else if(!type)
      return data.sort(compareTime);
  else
      throw "Invalid argument";
}

const orderByBombs = (data, type) => {
  //Ordem decrescente
  if(type)
      return data.sort(compareBombs).reverse();
  //Ordem crescente
  else if(!type)
      return data.sort(compareBombs);
  else
      throw "Invalid argument";
}

const compareBombs = (d1, d2) => {
  if(parseInt(d1.bombas) < parseInt(d2.bombas))
      return -1;
  else if(parseInt(d1.bombas) > parseInt(d2.bombas))
      return 1;
  
  return 0;
}

const compareDate = (d1, d2) => {
  //Compara na ordem ano/mes/dia
  
  let d1Split = dateStrToInt(d1.data);
  let d2Split = dateStrToInt(d2.data);

  if(d1Split[2] < d2Split[2])
      return -1;
  else if(d1Split[2] > d2Split[2])
      return 1;

  if(d1Split[1] < d2Split[1])
      return -1;
  else if(d1Split[1] > d2Split[1])
      return 1;

  if(d1Split[0] < d2Split[0])
      return -1;
  else if(d1Split[0] > d2Split[0])
      return 1;
  
  return 0;  
}

const dateStrToInt = (date) => {
  let intDate = date.split('/').map(function(item) {
    return parseInt(item, 10);
  });
  return intDate;
}

const compareTime = (d1, d2) => {
  if(parseInt(d1.tempo) < parseInt(d2.tempo))
      return -1;
  else if(parseInt(d1.tempo) > parseInt(d2.tempo))
      return 1;
  
  return 0;
}

const comparePoints = (d1, d2) => {
  let d1Rate = parseInt(d1.points);
  let d2Rate = parseInt(d2.points);

  if(d1Rate < d2Rate)
      return 1;
      
  else if(d1Rate > d2Rate)
      return -1;
  
  return 0;
}

//Fim Area ordenacoes

const $ = (selector, startNode = document) => startNode.querySelector(selector);
const tabelaHistorico = $('.tabelaHistorico').getElementsByTagName('tbody')[0];
const botaoAvancar = $('.botaoAvancar');
const botaoVoltar = $('.botaoVoltar');
const ordenador = $('.dropdown-content');
const user = $('.userInfo');
let page = 1;

try {
  var nome = JSON.parse(localStorage.getItem('usuario')).username
} catch (err) {
  alert ("Ocorreu um erro ao recuperar o usuário da sessão.")
}


user.innerHTML = nome;

const cleanTable = () => {
    while (tabelaHistorico.rows.length > 1) {
     tabelaHistorico.deleteRow(1);
    }
}

const verifyPagination = (data, init, end) =>{
  if (data.slice(end, end+10) < 1)
    botaoAvancar.style.display = "none";

  else
    botaoAvancar.style.display = "block";

  if(data.slice(init-10, init) < 1)
    botaoVoltar.style.display = "none";

  else
    botaoVoltar.style.display = "block";
}

const printPartidasOnHtml = (data, init, end) => {
    let slicedData;

    if (init !==null && end !== null)
      slicedData = data.slice(init, end);

    //Verificacao da existencia de paginacao
    verifyPagination(data, init, end);
    
    //Limpa tabela
    cleanTable()


    slicedData.map((item, index) => {

      if (index == 0) {
      tabelaHistorico.insertAdjacentHTML('beforeend', `<tr class="trContent"> <td> <div class="boxTdFirst">${item.data}</div></td><td> <div class="boxTdFirst">${item.bombas}</div></td><td> <div class="boxTdFirst">${item.grid}</div></td><td> <div class="boxTdFirst">${item.modalidade}</div></td><td> <div class="boxTdFirst">${item.tempo}</div></td> <td> <div class="boxTdFirst">${item.points}</div></td> <td> <div class="boxTdFirst">${item.resultado}</div></td></tr>`);
      } else {     
      tabelaHistorico.insertAdjacentHTML('beforeend', `<tr class="trContent"> <td> <div class="boxTd">${item.data}</div></td><td> <div class="boxTd">${item.bombas}</div></td><td> <div class="boxTd">${item.grid}</div></td><td> <div class="boxTd">${item.modalidade}</div></td><td> <div class="boxTd">${item.tempo}</div></td> <td> <div class="boxTd">${item.points}</div></td><td> <div class="boxTd">${item.resultado}</div></td></tr>`);
      }
    })
}

const setPage = (data, number) => {
  //Adiciona dados a tabela
  printPartidasOnHtml(data, (number*10)-10, number*10)
}

//Carrega primeira pagina
window.addEventListener('load',setPage(orderByDate(partidas,true), 1))

botaoAvancar.onclick = function () {
  page++
  setPage(partidas , page)
};

botaoVoltar.onclick = function () {
  page--
  setPage(partidas, page)
};

ordenador.children[0].onclick = function(){
  orderByDate(partidas, true);
  setPage(partidas, page);
};

ordenador.children[1].onclick = function(){
  orderByDate(partidas, false);
  setPage(partidas, page);
};

ordenador.children[2].onclick = function(){
  orderByTime(partidas, false);
  setPage(partidas, page);
};

ordenador.children[3].onclick = function(){
  orderByBombs(partidas, true);
  setPage(partidas, page);
};

ordenador.children[4].onclick = function(){
  partidas.sort(comparePoints);
  setPage(partidas, page);
}