'use client'

import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({
  language,
  value,
}: {
  language: string;
  value: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className='relative'>
      <button
        onClick={copyToClipboard}
        className='absolute right-0 top-0 z-50 mr-3 rounded-3 px-2 py-1 hover:bg-stone-200 transition-all'
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <div className='relative'>
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          customStyle={{
            // padding: '1em',
            // paddingTop: '2em', // Make room for the copy button
            borderRadius: '5px',
            fontSize: '14px',
            backgroundColor: 'white',
            // border: '1px solid #e1e4e8',
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
