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

export function getStatusInfo(code: number) {
  let status = {
    name: 'Unkown',
    isDanger: true,
  };
  switch (code) {
    case 1:
      status.name = 'Accepted';
      status.isDanger = false;
      break;
    case 2:
      status.name = 'Wrong answer';
      break;
    case 3:
      status.name = 'Time limit exceded';
      break;
    case 4:
      status.name = 'Compilation error';
      break;
    case 5:
      status.name = 'Runtime error';
      break;
    case 6:
      status.name = 'Exec format error';
      break;
    case 7:
      status.name = 'Unknown';
      break;
    default:
      break;
  }
  return status;
}

export const toCamelCase = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};
