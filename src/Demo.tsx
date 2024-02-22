import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return <div style={{maxWidth: '300px'}}><SyntaxHighlighter language={language} style={atomOneDark}>{value}</SyntaxHighlighter></div>
};

const Demo: React.FC = () => {
  const markdownContent = `
# Let's create content using Markdown + CodeBlock

## Here is a javascript example

It's a simple example of using console for loggin string in javascript

\`\`\`javascript
console.log("Hello")
\`\`\`

## Here is a typescript example

It's a simple example of declaring variable in typescript using number type

\`\`\`typescript
const a: number = 1
\`\`\`

# Here is TS logo
![TS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png)
`;

  return (
    <div style={{

    }}>
      <ReactMarkdown
        components={{
          code: ({ node, children, ...props }) => {
            const className = props.className as string;
            const language = className.replace('language-', '');
            return <CodeBlock language={language} value={String(children).replace(/\n$/, '')} />;
          },
          img: ({ node, ...props }) => <img {...props} style={{width: '150px', height: '150px'}} />
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}

export default Demo;
