import ListTestCases from "./ListTestCases";
import './CodeEditor.css'
function ProblemDescription()
{

    return(
        <div id = "PD_container">
            <h1>Problem Title</h1>
            <h2>Problem Description</h2>
            <p id="problem_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium accusamus laudantium. Nobis soluta, illo laboriosam corrupti et recusandae temporibus illum maxime deleniti, ea quis, veritatis eligendi odit nihil vero.</p>
            <ListTestCases></ListTestCases>
        </div>
    )
}

export default ProblemDescription;