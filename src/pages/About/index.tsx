import React, { useEffect } from "react";
import * as monaco from "monaco-editor";

export default function About() {
  useEffect(() => {
    monaco.editor.create(document.getElementById("container")!, {
      language: "typescript",
    });
  }, []);
  return (
    <div>
      <h2>About</h2>
      <div id="container" />
    </div>
  );
}
