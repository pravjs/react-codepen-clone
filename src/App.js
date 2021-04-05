import React, {useState, useEffect} from "react";
import Editor from "./components/Editor/Editor";
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {

    let timeout = setTimeout(() => {
      setSrcDoc(`<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
    }, 250);
    
    return () => {
      clearInterval(timeout);
    }
  }, [html, css, js]);

  return (
    <div className="App">
      <section className="editor-pane">
        <Editor
          language={'xml'}
          displayName={'html'}
          value={html}
          onChange={setHtml}
        />
        <Editor
          language={'css'}
          displayName={'css'}
          value={css}
          onChange={setCss}
        />
        <Editor
          language={'javascript'}
          displayName={'js'}
          value={js}
          onChange={setJs}
        />
      </section>
      <section className="result-pane">
          <iframe
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            srcDoc={srcDoc}
           />
      </section>
    </div>
  );
}

export default App;
