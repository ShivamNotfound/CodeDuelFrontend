import ListTestCases from "./ListTestCases";
import './CodeEditor.css'
import React, {useRef, useState, useEffect} from 'react' 
function ProblemDescription(props)
{
    return(
        <div id="left_wrapper" style={{ flex: `0 0 ${props.left_width}%` }}>
            <div id = "PD_container">
                <h1>Problem Title</h1>
                <h2>Problem Description</h2>
                <p id="problem_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium accusamus laudantium. Nobis soluta, illo laboriosam corrupti et recusandae temporibus illum maxime deleniti, ea quis, veritatis eligendi odit nihil vero.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium laudantium saepe accusantium commodi fugiat quo optio et. Magnam quis sint praesentium quisquam et deserunt impedit veritatis sed odit explicabo.</p>
                <ListTestCases></ListTestCases>
            </div>
            <button id="size_adjust_btn"
             onPointerDown={(event)=>event.currentTarget.setPointerCapture(event.pointerId)}
             onPointerMove={(event)=>{
                if(event.buttons === 1)
                {
                    props.resizeWindow(event);
                }
             }}>
                ::
            </button>
        </div>
    )
}

export default ProblemDescription;