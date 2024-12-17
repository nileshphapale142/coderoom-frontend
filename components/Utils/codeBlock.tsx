'use client';

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
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      console.error('Clipboard API is not supported in this environment.');
      alert('Copying to clipboard is not supported in your browser.');
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text. Please try again.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-0 top-0 z-50 mr-3 rounded-3 px-2 py-1 transition-all hover:bg-stone-200"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          wrapLongLines={true}
          customStyle={{
            borderRadius: '5px',
            fontSize: '12px',
            backgroundColor: 'white',
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
