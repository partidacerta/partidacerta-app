export const formatDate = (value: string): string => {
  if (!value) return '';
  const parts = value.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return value;
};

export const formatDateInput = (value: string): string => {
  let cleanValue = value.replace(/\D/g, '');

  cleanValue = cleanValue.slice(0, 8);

  if (cleanValue.length >= 5) {
    return `${cleanValue.slice(0, 2)}/${cleanValue.slice(
      2,
      4
    )}/${cleanValue.slice(4)}`;
  } else if (cleanValue.length >= 3) {
    return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`;
  } else {
    return cleanValue;
  }
};

export const normalizeDate = (value: string): string => {
  return value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');
};
