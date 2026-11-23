import './CodeEditor.css'
import Editor from "@monaco-editor/react"
import React, {useState, useEffect} from 'react'

function CodeEditor()
{
    const [language, setLanguage] = useState("python");

    function changeLanguage(event)
    {
        setLanguage(() => event.target.value);
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
            width="60vw"
            height="100vh"
            id = "editor"
            />
        </div>
    )
}

export default CodeEditor;