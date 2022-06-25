export const numberToLocal = (number) => {
  let format = { minimumFractionDigits: 2, style: "currency", currency: "BRL" };
  return number.toLocaleString("pt-BR", format);
};
