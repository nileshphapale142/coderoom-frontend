export const languageOptions = [
  // {
  //   id: 63,
  //   name: 'JavaScript (Node.js 12.14.0)',
  //   label: 'JavaScript (Node.js 12.14.0)',
  //   value: 'javascript',
  // },
  // {
  //   id: 75,
  //   name: 'C (Clang 7.0.1)',
  //   label: 'C (Clang 7.0.1)',
  //   value: 'c',
  // },
  // {
  //   id: 76,
  //   name: 'C++ (Clang 7.0.1)',
  //   label: 'C++ (Clang 7.0.1)',
  //   value: 'cpp',
  // },
  // {
  //   id: 48,
  //   name: 'C (GCC 7.4.0)',
  //   label: 'C (GCC 7.4.0)',
  //   value: 'c',
  // },
  // {
  //   id: 52,
  //   name: 'C++ (GCC 7.4.0)',
  //   label: 'C++ (GCC 7.4.0)',
  //   value: 'cpp',
  // },
  // {
  //   id: 49,
  //   name: 'C (GCC 8.3.0)',
  //   label: 'C (GCC 8.3.0)',
  //   value: 'c',
  // },
  // {
  //   id: 53,
  //   name: 'C++ (GCC 8.3.0)',
  //   label: 'C++ (GCC 8.3.0)',
  //   value: 'cpp',
  // },
  {
    id: 50,
    name: 'C (GCC 9.2.0)',
    label: 'C (GCC 9.2.0)',
    value: 'c',
  },
  {
    id: 54,
    name: 'C++ (GCC 9.2.0)',
    label: 'C++ (GCC 9.2.0)',
    value: 'cpp',
  },
  {
    id: 62,
    name: 'Java (OpenJDK 13.0.1)',
    label: 'Java (OpenJDK 13.0.1)',
    value: 'java',
  },
  // {
  //   id: 70,
  //   name: 'Python (2.7.17)',
  //   label: 'Python (2.7.17)',
  //   value: 'python',
  // },
  {
    id: 71,
    name: 'Python (3.8.1)',
    label: 'Python (3.8.1)',
    value: 'python',
  },
];

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
