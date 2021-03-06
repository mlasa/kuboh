export const CPFValidate = (cpf: string): boolean => {
  const strCpf = cpf.replace(/\D/g, "");
  if (!/[0-9]{11}/.test(strCpf)) {
    return false;
  };
  if (strCpf === "00000000000") {;
    return false;
  }
  let soma = 0;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(strCpf.substring(i - 1, i)) * (11 - i);
  }
  let resto = soma % 11;
  if (resto === 10 || resto === 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }
  if (resto !== parseInt(strCpf.substring(9, 10))) {
    return false;
  }
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(strCpf.substring(i - 1, i)) * (12 - i);
  }
  resto = soma % 11;
  if (resto === 10 || resto === 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }
  if (resto !== parseInt(strCpf.substring(10, 11))) {
    return false;
  }
  else {
    return true;
    console.log("valido")
  }

}
