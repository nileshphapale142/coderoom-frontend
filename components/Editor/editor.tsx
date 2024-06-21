'use client'

import React from 'react'
import { Editor } from '@monaco-editor/react';

interface CodeEditorProps {
  onChange:(arg0:string, arg1:string) => void;
  language:string
  code:string
  theme:string
}

export const CodeEditor = ({onChange, language, code, theme}:CodeEditorProps) => {
  const [value, setValue] = React.useState<string>(code || '');

  const handleEditorChange = (value:string) => {
    setValue(value);
    onChange('code', value);
  };

  return (
    <div className='overlay shadow-4xl h-full w-full overflow-hidden rounded-md'>
      <Editor
        height='85vh'
        width={`100%`}
        language={language || 'javascript'}
        value={value}
        theme={theme}
        defaultValue='// some comment'
        onChange={() => handleEditorChange}
      />
    </div>
  );
}