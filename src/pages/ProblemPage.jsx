import ProblemDescription from "../components/ProblemDescription";
import RightPanel from "../components/RightPanel";
import '../index.css'
import React, {useRef, useState} from 'react'
function ProblemPage()
{
    const container = useRef(null);
    const [left_width, setLeft] = useState(30);
    function resizeWindow(event)
    {
        const rect = container.current.getBoundingClientRect();
        let newLeftWidth = (event.clientX - rect.left) / rect.width * 100;
        newLeftWidth = Math.max(25, Math.min(newLeftWidth, 75));
        setLeft(newLeftWidth);
    }

    return (
        <div id="problem_page_container" ref={container}>
            <ProblemDescription left_width = {left_width} resizeWindow = {resizeWindow}></ProblemDescription>
            <RightPanel></RightPanel>
        </div>
    )
}

export default ProblemPage;