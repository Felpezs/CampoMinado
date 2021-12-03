// Validador de CPF adaptado de DevMedia https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function cpfValido(strCPF) {
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
    if (!(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(strData)))
      return false;
      
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

  function validaCadastro(formCad){
    let cadastroValido = true;
    for(let i = 0; i < formCad.elements.length; i++){
      if(!formCad.elements[i].value){

        let input = formCad.elements[i];

        let paragraph = document.createElement("P");    
        paragraph.classList = 'warning';              
        paragraph.append(document.createTextNode("Obrigatório*"));                                           

        input.parentNode.insertBefore(paragraph, input);


        cadastroValido = false;
       }
    }

    if(!cpfValido(formCad.cpf.value)){
      alert(`O Campo ${formCad.cpf.alt} É Inválido`);
      cadastroValido = false;
    }

    if(!dataValida(formCad.dataNasc.value)){
      alert(`O Campo ${formCad.dataNasc.alt} É Inválido`);
      cadastroValido = false;
    }

    if(formCad.senha.value !== formCad.confirmaSenha.value){
      alert(`As Senhas Diferem. Insira Senhas Iguais.`);
      cadastroValido = false;
    }
      
    return cadastroValido;
}
export {validaCadastro, cpfValido,dataValida} 