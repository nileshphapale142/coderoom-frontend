'use client'

import React from 'react';
import Select from 'react-select';
import { customStyles, languageOptions } from '@/Utils';

export const LanguagesDropdown = ({ onSelectChange }:any) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};