import React from 'react';
import styles from './acescroll.module.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";


export function AceScroll() {
  const files = {
    '/App.js': `
  import './index.css';
  export default function App() {
    return <h1>Good day!</h1>;
  }
  `,
    '/index.css': `
  h1 {
    color: tomato;
  }
  `,
  };
  
  return (
    <div className={styles.aceScroller} style={{lineHeight: '21px', left: '52px', right: '15px' , bottom: '0px'}}>
      <div className={styles.aceContent} style={{transform: 'translate(0px, 10px)', width: '281px', height: '704px'}}>
        <div className={styles.aceLayer}></div>
        <div className={`${styles.aceLayer} ${styles.aceTextLayer}`} style={{height: '1e+06px' ,margin: '0px 4px' ,transform: 'translate(0px, 0px)'}}>
          {/*<div style={{height: '21px', top: '0px'}}>
            <div style={{height: '21px'}}>
              <span className={styles.codeText}>&lt;!</span>
              <span className="ace_xml-pe ace_doctype ace_xml">DOCTYPE</span>
              <span className="ace_text ace_whitespace ace_xml"> </span>
              <span className="ace_xml-pe ace_xml">html</span>
              <span className="ace_xml-pe ace_doctype ace_xml">&gt;</span>
            </div>
  </div>*/}
        
          

        </div>
      </div>
    </div>

  );
}
