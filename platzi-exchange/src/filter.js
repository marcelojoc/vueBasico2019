import numeral from "numeral"; // importo numerals

const dollarFilter = function(value) {
  // creo una funcion que devuelve  el valor  pasado por parametro  en dolares
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function(value) {
  // formatea  el valor  a porcentajes
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
