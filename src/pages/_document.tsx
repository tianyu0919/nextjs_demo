import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script type="module" src="../../node_modules/monaco-editor/esm/vs/editor/editor.main.js" defer />
      <body>
        xx1
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
