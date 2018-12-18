class ClienteHelper {

  static cpfIsValid(cpf) {
    if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" ||
        cpf.length != 11) {
      return false;
    }
    
    let soma = 0;
    let i, resto;

    // DIGITO 1
    for (i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * (10 - i);
    }

    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto != parseInt(cpf[9], 10)) {
      return false;
    }

    // DIGITO 2
    soma = 0;
    for (i = 0; i < 10; i++) {
      soma += parseInt(cpf[i], 10) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto != parseInt(cpf[10], 10)) {
      return false;
    }

    return true;
  }

  static cnpjIsValid(cnpj) {
    if (cnpj == "00000000000000" || cnpj == "11111111111111" ||
        cnpj == "22222222222222" || cnpj == "33333333333333" ||
        cnpj == "44444444444444" || cnpj == "55555555555555" ||
        cnpj == "66666666666666" || cnpj == "77777777777777" ||
        cnpj == "88888888888888" || cnpj == "99999999999999" ||
        cnpj.length != 14) {
          return false;
    }

    let soma = 0;
    let peso = 2;
    let i, resto;

    // DIGITO 1
    for (i = 11; i >= 0; i--) {
      soma += parseInt(cnpj[i], 10) * peso;
      peso++;
      if (peso > 9) {
        peso = 2;
      }
    }

    resto = soma % 11;
    if(resto == 0 || resto == 1) {
      resto = 0;
    }
    else {
      resto = 11 - resto;
    }

    if (resto != parseInt(cnpj[12], 10)) {
      return false;
    }

    // DIGITO 2
    soma = 0;
    peso = 2;

    for (i = 12; i >= 0; i--) {
      soma += parseInt(cnpj[i], 10) * peso;
      peso++;
      if (peso > 9) {
        peso = 2;
      }  
    }
    
    resto = soma % 11;
    if (resto == 0 || resto == 1) {
      resto = 0;
    }
    else {
      resto = 11 - resto;
    }

    if (resto != parseInt(cnpj[13], 10)) {
      return false;
    }

    return true;
  }
}