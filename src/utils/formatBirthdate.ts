export const formatBirthdate = (value: string): string => {
  const numericValue = value.replace(/\D/g, '');
  let formattedValue = numericValue;

  if (numericValue.length > 2) {
    formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}`;
  }
  if (numericValue.length > 4) {
    formattedValue += `/${numericValue.slice(4, 8)}`;
  }

  return formattedValue;
};
