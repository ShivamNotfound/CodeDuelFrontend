import CodeEditor from "./CodeEditor";
import "./CodeEditor.css";
function RightPanel()
{
    
    return (
        <div id="right_panel_container">
            <h2>
                Code Editor
            </h2>
            <CodeEditor>
            </CodeEditor>
        </div>
    )
}

export default RightPanel;