export const formatPhone = (value: string): string => {
  const numericValue = value.replace(/\D/g, '');
  let formattedValue = numericValue;

  if (numericValue.length > 0) {
    formattedValue = `(${numericValue.slice(0, 2)}`;
  }
  if (numericValue.length >= 3) {
    formattedValue += `) ${numericValue.slice(2, 7)}`;
  }
  if (numericValue.length >= 8) {
    formattedValue += `-${numericValue.slice(7, 11)}`;
  }

  return formattedValue;
};
