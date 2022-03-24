import React from "react";
import {FaTimes } from 'react-icons/fa';    
const ToDoLists = (props) =>{
    
   
    
    return (
    <> 
    <div className="todo_style">
        <p className="fa-times" onClick={()=>{
            props.onSelect(props.id);
        }}><FaTimes /></p>
        <li> {props.text} </li>
    </div>
     
     </>
    );

};

export default ToDoLists;