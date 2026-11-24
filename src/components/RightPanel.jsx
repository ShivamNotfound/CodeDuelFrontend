import CodeEditor from "./CodeEditor";
import "./CodeEditor.css";
import React, {useRef} from 'react'

function RightPanel(props)
{
    const getCode = () => {
        console.log(editorRef);
    }
    const editorRef = useRef("");

    return (
        <div id="right_panel_container" ref = {props.right_panelRef}>
            <div id="code_editor_header">
                <h2>
                Code Editor
                </h2>
                <button id="kill_button" onClick = {getCode}>
                    Kill
                </button>
            </div>
            <CodeEditor editorRef = {editorRef}>
            </CodeEditor>
        </div>
    )
}

export default RightPanel;