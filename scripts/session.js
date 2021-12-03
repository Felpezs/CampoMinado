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


function recuperaCookie(nome_cookie) {
    // Adiciona o sinal de = na frente do nome do cookie
    var cname = ' ' + nome_cookie + '=';
    
    // Obtém todos os cookies do documento
    var cookies = document.cookie;
    
    // Verifica se seu cookie existe
    if (cookies.indexOf(cname) == -1) {
        return false;
    }
    
    // Remove a parte que não interessa dos cookies
    cookies = cookies.substr(cookies.indexOf(cname), cookies.length);

    // Obtém o valor do cookie até o ;
    if (cookies.indexOf(';') != -1) {
        cookies = cookies.substr(0, cookies.indexOf(';'));
    }
    
    // Remove o nome do cookie e o sinal de =
    cookies = cookies.split('=')[1];
    
    // Retorna apenas o valor do cookie
    return decodeURI(cookies);
}


function verificaSessaoNaoSeguro(href) {

    let chave = recuperaCookie("chave");
    let usuario = recuperaCookie("usuario");
    //ProgWeb/Screens/
    let ajax = new XMLHttpRequest();
    let json = JSON.stringify({Username: usuario, Chave: chave});

    ajax.open("POST", "../../php/Auth/verificaSessao.php");
    ajax.addEventListener('readystatechange', (ev) => {
      let ajax = ev.target;

      if(ajax.readyState === XMLHttpRequest.DONE){
        if(ajax.status === 200){
          console.log("Sessão verificada com sucesso!")
        }
        else if(ajax.status === 402) {
          window.location.href = "../index.html";
          console.log("Sessão inválida, faça login novamente!")
        }
      }
    });
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(json);


}

export {criaCookieDeSessao, verificaSessaoNaoSeguro};