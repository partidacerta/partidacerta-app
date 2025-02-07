export const formatDate = (date: string) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatDateInput = (input: string) => {
  const onlyNumbers = input.replace(/\D/g, '');

  let formattedDate = onlyNumbers;

  if (formattedDate.length > 2) {
    formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2);
  }
  if (formattedDate.length > 5) {
    formattedDate = formattedDate.slice(0, 5) + '/' + formattedDate.slice(5, 9);
  }

  return formattedDate;
};

export const normalizeDate = (date: string) => {
  if (!date) return '';

  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}T00:00:00`;
};
