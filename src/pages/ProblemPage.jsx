import ProblemDescription from "../components/ProblemDescription";
import RightPanel from "../components/RightPanel";
import '../index.css'
function ProblemPage()
{

    return (
        <div id="problem_page_container">
            <ProblemDescription></ProblemDescription>
            <RightPanel></RightPanel>
        </div>
    )
}

export default ProblemPage;