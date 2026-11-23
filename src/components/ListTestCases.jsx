function ListTestCases()
{
    const test_cases = [{input : "[1,2,3]", output : "3"},
                  {input : "[1,2,4,5,3]", output : "5"},
                 ]

    const case_items = test_cases.map((item, index)=>(
        <div key={index} className = "test_case">
            <div className="test_case_no">
                Example {index+1}
            </div>
            <div className = "inputs">
                Input : {item.input}
            </div>
            <div className = "outputs">
                Output : {item.output}
            </div>
        </div>
    ))

    return (
        <div id = "test_case_list">
            {case_items}
        </div>
        
    )
}

export default ListTestCases;