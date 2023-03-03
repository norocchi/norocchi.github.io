import dynamic from "next/dynamic";
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import toml from "toml";
import PyConfig from "./PyConfig";

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  const codeBlockParams = className ? className.split(":") : [];
  const filename = codeBlockParams?.length >= 2 ? codeBlockParams[1] : "";
  const code = String(children).replace(/\n$/, "");
  let extra = null;
  if (
    lang === "python" &&
    codeBlockParams.length > 2 &&
    codeBlockParams[2] === "pyscript"
  ) {
    const PyScript = dynamic(() => import("./PyScript"), { ssr: false });
    extra = <PyScript filename={filename} code={String(children)}></PyScript>;
  } else if (lang === "pyconfig") {
    const config = toml.parse(code)
    type Fetch = {
      from: string;
      to_file: string;
    }
    const files = config.fetch.map((f: Fetch) => {
      const tmp = f.to_file.split("/");
      return `├─ ${tmp[tmp.length - 1]}`
    }).join("\n")
    return (
      <>
        <div>
          {files}
        </div>
        <PyConfig config={code}></PyConfig>
      </>
    );
  }
  return (
    <>
      <div>{filename}</div>
      <SyntaxHighlighter style={tomorrow} language={lang}>
        {code}
      </SyntaxHighlighter>
      {extra}
    </>
  );
};

export default CodeBlock;
