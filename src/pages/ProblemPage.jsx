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
        newLeftWidth = Math.max(20, Math.min(newLeftWidth, 80));
        setLeft(newLeftWidth);
    }

    return (
        <div id="problem_page_container" ref={container}>
            <ProblemDescription left_width = {left_width} resizeWindow = {resizeWindow}></ProblemDescription>
            <RightPanel left_width = {left_width}></RightPanel>
        </div>
    )
}

export default ProblemPage;