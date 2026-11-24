import ProblemDescription from "../components/ProblemDescription";
import RightPanel from "../components/RightPanel";
import '../index.css'
import React, {useRef} from 'react'
function ProblemPage()
{
    const right_panelRef = useRef(2);

    return (
        <div id="problem_page_container">
            <ProblemDescription right_panelRef = {right_panelRef}></ProblemDescription>
            <RightPanel right_panelRef = {right_panelRef}></RightPanel>
        </div>
    )
}

export default ProblemPage;