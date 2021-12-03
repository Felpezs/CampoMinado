// Validador de CPF adaptado de DevMedia https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function cpfValido(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  
    if (!strCPF) return false;
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
  
    if(!strData)
      return false; 
      
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

  function validaCadastro(username, nome, cpf, email, dataNasc, telefone, senha, confirmaSenha){
    let cadastroValido = true;
    if(!username){
      alert('O Campo Username É Obrigatório');
      cadastroValido = false;
    }
    if(!nome){
      alert('O Campo Nome É Obrigatório');
      cadastroValido = false;
    }
    if(!cpfValido(cpf)){
      alert('O Campo CPF É Inválido');
      cadastroValido = false;
    }
    if(!email || !email.includes("@")){
      alert('O Campo Email É Inválido');
      cadastroValido = false;
    }
    if(!dataValida(dataNasc)){
      alert('O Campo Data de Nascimento É Inválido');
      cadastroValido = false;
    }
    if(!telefone || telefone.length < 10){
      alert('O Campo Telefone É Inválido');
      cadastroValido = false;
    }
    if(!senha){
      alert('O Campo Senha É Obrigatório');
      cadastroValido = false;
    }
    if(!confirmaSenha){
      alert('O Campo Confirmar Senha É Obrigatório');
      cadastroValido = false;
    }
    if(senha !== confirmaSenha){
      alert('Os Campos De Senha Não São Idênticos');
      cadastroValido = false;
    }
    return cadastroValido; 
  }

export {validaCadastro, cpfValido,dataValida} 