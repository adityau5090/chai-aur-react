import { useDispatch, useSelector } from "react-redux"
import { removeTodo, updateTodo } from "../features/todo/todoSlice"
import { useState } from "react"

const Todo = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [text, setText] = useState("")

  const handleEdit = (todo) => {
    setEditId(todo.id)        // which todo is being edited
    setText(todo.text)        // put text into input ✅
  }

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text }))
    setEditId(null)           // exit edit mode
  }

  return (
    <div>
      <h2>Todos</h2>

      {todos.map((todo) => (
        <li key={todo.id}>
          
          {editId === todo.id ? (
            <>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>
                Save
              </button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => handleEdit(todo)}>
                Update
              </button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </>
          )}

        </li>
      ))}
    </div>
  )
}

export default Todo