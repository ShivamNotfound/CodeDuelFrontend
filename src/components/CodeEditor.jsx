import './CodeEditor.css'
import Editor from "@monaco-editor/react"
import React, {useState, useEffect, useRef} from 'react'

function CodeEditor(props)
{
    const [language, setLanguage] = useState("python");

    function changeLanguage(event)
    {
        setLanguage(() => event.target.value);
    }
    function updateCode(value)
    {
        props.editorRef.current = value;
    }
    
    return (
        <div id="code_editor">
        <select id = "language_select" onChange={(e)=>{changeLanguage(e)}}>
            <option value="python">Python</option>
            {/* <option value="java">Java</option>
            <option value='c'>C</option> */}
        </select>
        <Editor 
            language={language}
            theme = "dark"
            defaultValue='#Write your code here'
            height="500px"
            width="100%"
            id = "editor"
            onChange={updateCode}
            option ={{
                automaticLayout: true,
            }}
            />
        </div>
    )
}

export default CodeEditor;