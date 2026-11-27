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
            height={props.height}
            width="100%"
            id = "editor"
            onChange={updateCode}
            option ={{
                automaticLayout: true,
            }}
            />
            
        <button id="height_adjust_btn"
                // onPointerDown={(e)=>e.currentTarget.setPointerCapture(e.pointerId)}
                // onPointerMove={(e)=>{
                //     if(e.buttons === 1)
                //     {

                //     }
                // }}
                >
            ..
        </button>
        <div id="if_code_failed" ref = {props.resultRef} style={{display: "none", height: 500 - props.height}}>
        </div>
        
        </div>
        
    )
}

export default CodeEditor;