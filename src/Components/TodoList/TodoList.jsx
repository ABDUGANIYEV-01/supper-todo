import { useRef } from 'react'
import Delete from '../../Assets/svg/Delete.svg'
import Edit from '../../Assets/svg/edit.svg'


const TodoList = ({ todo, setTodoArr }) => {

    const editBtn = useRef()
    const okBtn = useRef()
    const todoRef = useRef()

    function editTodo(){
        editBtn.current.style.display = "none"
        okBtn.current.style.display = 'flex'
        todoRef.current.contentEditable = true
    }

    function saveEdit(){
        okBtn.current.style.display="none"
        editBtn.current.style.display="flex"
        todoRef.current.contentEditable = false
        // setTodoArr(newArr)
    }

    function deletTodo(){
        setTodoArr(state => state.filter(item => item.id !== todo.id))
    }
    
    return (
        <div className="todoList">
            <button className="todoList__ok" ref={okBtn} onClick={saveEdit}>ok</button>
            <button className="todoList__edit" ref={editBtn} onClick={editTodo}><img src={Edit} alt="editBtn"/></button>
            <p className="todoList__text" ref={todoRef}>{todo.title}</p>
            <button className="todoList__btn" onClick={deletTodo}><img src={Delete} alt="deletBtn" /></button>
        </div>
    )
}

export default TodoList