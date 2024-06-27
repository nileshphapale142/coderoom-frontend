export function isAlphanumeric(str: string) {
  const alphanumericRegex = /^[a-z0-9]+$/i;
  return alphanumericRegex.test(str);
}

export function isValidCourseCode(code: string): boolean {
  return isAlphanumeric(code) && code.length >= 5 && code.length <= 7
}

export const classnames = (...args:any) => {
  return args.join(' ');
};