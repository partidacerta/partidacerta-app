interface ValidadeInputPassword {
  input: string;
  validationType: 'specialChar' | 'uppercase' | 'lowercase' | 'number';
}

export function validateInputPassword({
  input,
  validationType,
}: ValidadeInputPassword) {
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;
  const uppercasePattern = /[A-Z]/g;
  const lowercasePattern = /[a-z]/g;
  const numberPattern = /[0-9]/g;

  switch (validationType) {
    case 'specialChar':
      return specialCharPattern.test(input);
    case 'uppercase':
      return uppercasePattern.test(input);
    case 'lowercase':
      return lowercasePattern.test(input);
    case 'number':
      return numberPattern.test(input);
    default:
      return false;
  }
}
