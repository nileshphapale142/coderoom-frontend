import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({
  language,
  value,
}: {
  language: string;
  value: string;
}) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {value}
    </SyntaxHighlighter>
  );
};
