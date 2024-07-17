export function isAlphanumeric(str: string) {
  const alphanumericRegex = /^[a-z0-9]+$/i;
  return alphanumericRegex.test(str);
}

export function isValidCourseCode(code: string): boolean {
  return isAlphanumeric(code) && code.length >= 5 && code.length <= 7;
}

export const classnames = (...args: any) => {
  return args.join(' ');
};

export const isValidInstituteEmail = (email: string): boolean => {
  // Regular expression to match common institute email formats including .ac.in
  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu|ac\.uk|edu\.in|ac\.in)$/;

  // Check if the email matches the regex pattern
  return regex.test(email);
};

export function isAbsoluteNumber(str: string) {
  const regex = /^\d+$/;
  return regex.test(str);
}
