"use strict";

//Inicio partidas

var partidas = [
  {
    "id": "1",
    "username": "Marcos",
    "data": "01/01/2001",
    "bombas": "8",
    "grid" : "4x4",
    "modalidade" : "classico",
    "tempo": "222",
    "resultado": "derrota",
    "points": "2"
  },
  {
    "id": "2",
    "username": "Marcelo",
    "data": "04/05/2006",
    "bombas": "21",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "123",
    "resultado": "vitoria",
    "points": "8"
  },
  {
    "id": "3",
    "username": "Pedro",
    "data": "21/05/2004",
    "bombas": "27",
    "grid" : "7x7",
    "modalidade" : "classico",
    "tempo": "245",
    "resultado": "derrota",
    "points": "2"
  },
  {
    "id": "4",
    "username": "João",
    "data": "21/08/2006",
    "bombas": "14",
    "grid" : "5x5",
    "modalidade" : "classico",
    "tempo": "127",
    "resultado": "vitoria",
    "points": "5"
  },
  {
    "id": "5",
    "username": "Paulo",
    "data": "05/05/2004",
    "bombas": "12",
    "grid" : "4x4",
    "modalidade" : "rivotril",
    "tempo": "562",
    "resultado": "vitoria",
    "points": "2"
  },
  {
    "id": "6",
    "username": "Alexandre",
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
    "username": "Felipe",
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
    "username": "Ana",
    "data": "11/11/2011",
    "bombas": "17",
    "grid" : "12x12",
    "modalidade" : "classico",
    "tempo": "70",
    "resultado": "vitoria",
    "points": "2"
  },
  {
    "id": "9",
    "username": "Beatriz",
    "data": "12/12/2012",
    "bombas": "9",
    "grid" : "10x23",
    "modalidade" : "rivotril",
    "tempo": "103",
    "resultado": "vitoria",
    "points": "1"
  },
  {
    "id": "10",
    "username": "Laura",
    "data": "09/09/2009",
    "bombas": "7",
    "grid" : "9x9",
    "modalidade" : "rivotril",
    "tempo": "200",
    "resultado": "vitoria",
    "points": "1"
  },
  {
    "id": "11",
    "username": "Ryan",
    "data": "05/04/2002",
    "bombas": "87",
    "grid" : "80x80",
    "modalidade" : "classico",
    "tempo": "6000",
    "resultado": "derrota",
    "points": "0"
  },
  {
    "id": "12",
    "username": "Igor",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "17"
  },
  {
    "id": "13",
    "username": "Amanda",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "17"
  },
  {
    "id": "14",
    "username": "Guilherme",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "17"
  },
  {
    "id": "15",
    "username": "Mateus",
    "data": "24/08/2020",
    "bombas": "18",
    "grid" : "6x6",
    "modalidade" : "rivotril",
    "tempo": "50",
    "resultado": "vitoria",
    "points": "17"
  }
]

//Fim Partidas
//Inicio order

const comparePoints = (d1, d2) => {
  let d1Rate = parseInt(d1.points); 
  let d2Rate = parseInt(d2.points);

  if(d1Rate < d2Rate)
      return 1;
      
  else if(d1Rate > d2Rate)
      return -1;
  
  return 0;
}

//Fim order

const $ = (selector, startNode = document) => startNode.querySelector(selector);
const tabelaRanking = $('.tabelaRankingGlobal').getElementsByTagName('tbody')[0];

const printPartidasOnHtml = (data, init, end) => {
    
  let slicedData;

    if (init !==null && end !== null)
      slicedData = data.slice(init, end);

    slicedData.map((item, index) => {

      if (index == 0) {
      tabelaRanking.insertAdjacentHTML('beforeend', `<tr class="trContent"> <td> <div class="boxTdFirst">#${index+1}</div></td><td> <div class="boxTdFirst">${item.username}</div></td><td> <div class="boxTdFirst">${item.grid}</div></td><td> <div class="boxTdFirst">${item.tempo}</div></td><td> <div class="boxTdFirst">${item.points}</td></div></tr>`);
      } else {    
      tabelaRanking.insertAdjacentHTML('beforeend', `<tr class="trContent"> <td> <div class="boxTd">#${index+1}</div></td><td> <div class="boxTd">${item.username}</div></td><td> <div class="boxTd">${item.grid}</div></td><td> <div class="boxTd">${item.tempo}</div></td><td><div class="boxTd">${item.points}</div></td> </tr>`);
      }
    })
}

const setPage = (data, number) => {
  //Adiciona dados a tabela
  printPartidasOnHtml(data, (number*10)-10, number*10)
}

//Carrega primeira pagina
window.addEventListener('load',setPage(partidas.sort(comparePoints), 1))