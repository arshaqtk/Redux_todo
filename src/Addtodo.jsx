import React, { useState } from 'react'
import { Addtask } from './todoSlice';
import { useDispatch } from 'react-redux';


function Addtodo() {

    const dispatch=useDispatch()
    const [text,setText]=useState("")

    const handleAdd=()=>{
        dispatch(Addtask(text))
        setText("")
    }
return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Addtodo