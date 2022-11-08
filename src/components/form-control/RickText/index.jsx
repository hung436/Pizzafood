import "@wangeditor/editor/dist/css/style.css"; // import css

import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { i18nChangeLanguage } from "@wangeditor/editor";

function MyEditor() {
  // editor instance
  // const [editor, setEditor] = (useState < IDomEditor) | (null > null); // TS syntax
  const [editor, setEditor] = useState(null); // JS syntax

  // editor content
  const [html, setHtml] = useState("");
  i18nChangeLanguage("en");
  // Simulate ajax async set html
  useEffect(() => {
    setTimeout(() => {
      setHtml("<p></p>");
    }, 1500);
  }, []);

  // const toolbarConfig: Partial<IToolbarConfig> = {}; // TS syntax
  const toolbarConfig = {}; // JS syntax

  // const editorConfig: Partial<IEditorConfig> = {
  // TS syntax
  const editorConfig = {
    // JS syntax
    placeholder: "Chi tiết...",
  };

  // Timely destroy editor, important!
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode='default'
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode='default'
          style={{ height: "500px" }}
        />
      </div>
      {/* <div style={{ marginTop: "15px" }}>{html}</div> */}
    </>
  );
}

export default MyEditor;
