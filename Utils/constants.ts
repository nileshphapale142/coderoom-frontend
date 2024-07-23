export const languageOptions = [
  {
    id: 50,
    name: 'C',
    label: 'C (GCC 9.2.0)',
    value: 'c',
  },
  {
    id: 54,
    name: 'C++',
    label: 'C++ (GCC 9.2.0)',
    value: 'cpp',
  },
  {
    id: 62,
    name: 'Java',
    label: 'Java (OpenJDK 13.0.1)',
    value: 'java',
  },
  {
    id: 71,
    name: 'Python',
    label: 'Python (3.8.1)',
    value: 'python',
  },
];

type LangKey = 'C' | 'C++' | 'Java' | 'Python';
type LangValue = {
  [key in LangKey]: { value: string; id: number };
};

export const langValue: LangValue = {
  C: { value: 'c', id: 50 },
  'C++': { value: 'cpp', id: 54 },
  Java: { value: 'java', id: 62 },
  Python: { value: 'python', id: 71 },
};

export const customStyles = {
  control: (styles: any) => ({
    ...styles,
    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    borderRadius: '5px',
    color: '#000',
    fontSize: '0.8rem',
    // lineHeight: '1.75rem',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    // border: '1px solid #000000',
    // boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    ':hover': {
      // border: '2px solid #000000',
      // boxShadow: 'none',
    },
  }),

  option: (styles: any) => {
    return {
      ...styles,
      color: '#000',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',
      background: '#fff',
      ':hover': {
        backgroundColor: 'rgb(243 244 246)',
        color: '#000',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#fff',
      maxWidth: '14rem',
      // border: '2px solid #000000',
      borderRadius: '5px',
      // boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    };
  },

  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
};
