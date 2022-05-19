const verifyCpf = (strCPF: string) => {
  var sum = 0;

  // Testa as sequencias que possuem todos os dígitos iguais e, se o cpf não tem 11 dígitos, retorna falso e exibe uma msg de erro
  if (
    strCPF === '00000000000' ||
    strCPF === '11111111111' ||
    strCPF === '22222222222' ||
    strCPF === '33333333333' ||
    strCPF === '44444444444' ||
    strCPF === '55555555555' ||
    strCPF === '66666666666' ||
    strCPF === '77777777777' ||
    strCPF === '88888888888' ||
    strCPF === '99999999999' ||
    strCPF.length !== 11
  ) {
    return false;
  }

  // Multiplica cada digito por numeros de 1 a 9, soma-os e multiplica-os por 10. Depois, divide o resultado encontrado por 11 para encontrar o resto
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  var rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(strCPF.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let k = 1; k <= 10; k++) {
    sum = sum + parseInt(strCPF.substring(k - 1, k)) * (12 - k);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(strCPF.substring(10, 11))) {
    return false;
  }

  return true;
};

export default verifyCpf;
