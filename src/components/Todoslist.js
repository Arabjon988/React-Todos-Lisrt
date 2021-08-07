import React from 'react'
import { FiEdit, FiTrash } from "react-icons/fi";
import {FaRegCheckCircle} from "react-icons/fa"

const Todoslist = ({ todos, setTodos, setEditTodo }) => {

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
    const handleComplete = (todo) =>{

        setTodos(
            todos.map((item) => {
                if (item.id=== todo.id){
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }

    return (
        <div>
            {todos.map((todo) =>
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} className={`list ${todo.completed ? "completed" :"" }`} onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className="button-complete task-button" >
                            <FaRegCheckCircle onClick={()=> handleComplete (todo)} />
                        </button>
                        <button className="button-edit task-button">
                            <FiEdit onClick={()=> handleEdit(todo)} />
                        </button>
                        <button className="button-delete task-button">
                            <FiTrash onClick={()=> handleDelete(todo)} />
                        </button>
                        

                    </div>
                </li>
            )}
        </div>
    )
}

export default Todoslist
