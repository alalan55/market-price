export const numberToLocal = (number) => {
  let format = { minimumFractionDigits: 2, style: "currency", currency: "BRL" };
  return number.toLocaleString("pt-BR", format);
};

export const toBigger = (array, key) => {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];

    if (x < y) {
      return -1;
    } else {
      return true;
    }
  });
};

export const toMinor = (array, key) => {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];

    if (x > y) {
      return -1;
    } else {
      return true;
    }
  });
};
