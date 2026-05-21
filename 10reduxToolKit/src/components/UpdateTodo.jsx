// import React from 'react'

import { useDispatch } from "react-redux"
import { updateTodo } from "../features/todo/todoSlice"

const UpdateTodo = ({todo}) => {

   const dispatch = useDispatch()

    const handleUpdate = () => {
        
        dispatch(updateTodo({
            id: todo.id,
            text: todo.text
        }))
    }
  return (
    <div>
      <button onClick={handleUpdate}>Update Todo</button>
    </div>
  )
}

export default UpdateTodo
