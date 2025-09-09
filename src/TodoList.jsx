
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo,deleteTodo } from './todoSlice';
import {useNavigate} from "react-router-dom"

function TodoList() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate= useNavigate()
  return (
    <>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    <button onClick={()=>navigate('/addtodo')}>Add</button>
    </>
  );
}

export default TodoList;
