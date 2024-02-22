import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return <SyntaxHighlighter language={language} style={atomOneDark}>{value}</SyntaxHighlighter>;
};

const Demo: React.FC = () => {
  const markdownContent = `
### Let's create content using Markdown + CodeBlock

\`\`\`javascript
console.log("Hello")
\`\`\`

\`\`\`typescript
const a: number = 1
\`\`\`
`;

  return (
    <div>
      <ReactMarkdown
        components={{
          code: ({ node, children, ...props }) => {
            const className = props.className as string;
            const language = className.replace('language-', '');
            return <CodeBlock language={language} value={String(children).replace(/\n$/, '')} />;
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}

export default Demo;
