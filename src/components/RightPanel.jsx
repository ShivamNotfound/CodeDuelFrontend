import CodeEditor from "./CodeEditor";
import "./CodeEditor.css";
import React, {useRef, useState} from 'react'

function RightPanel()
{
    const [height, setHeight] = useState(480);
    function evaluateCode(code)
    {
        // Code to the backend for evaluation

        const temp_result = {
            result: "Failed",
            test_cases_passed: 3,
            total_test_cases: 10,
            failed_test_case: {
                input: "1 4 5",
                expected_output: "5",
                actual_output: "1"
            }
        }                         // Success result object from backend
        if(temp_result.result === "Failed")
        {
            resultRef.current.style.display = "block";
            resultRef.current.innerHTML = ` <div id="failed_header">
                                             Code Failed
                                           </div>
                                            <div id="test_case_result">
                                             Code failed on ${temp_result.test_cases_passed} out of ${temp_result.total_test_cases} test cases.
                                           </div>
                                           <div id="failed_test_case">
                                                Failed Test Case:
                                                <div>
                                                    Input: ${temp_result.failed_test_case.input}
                                                </div>
                                                <div>
                                                    Expected Output: ${temp_result.failed_test_case.expected_output}
                                                </div>
                                                <div>
                                                    Actual Output: ${temp_result.failed_test_case.actual_output}
                                                </div>
                                           </div>
                                           `;
            setHeight(280);
        }
    }

    function getCode()
    {
        evaluateCode(editorRef.current);
    }

    const editorRef = useRef("");
    const resultRef = useRef(null);
   

    return (
        <div id="right_panel_container">
            <div id="code_editor_header">
                <h2>
                Code Editor
                </h2>
                <button id="kill_button" onClick = {getCode}>
                    Kill
                </button>
            </div>
            <CodeEditor editorRef = {editorRef} resultRef = {resultRef} height = {height} setHeight = {setHeight}>
            </CodeEditor>
            
        </div>
    )
}

export default RightPanel;