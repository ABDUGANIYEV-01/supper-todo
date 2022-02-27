import Delete from '../../Assets/svg/Delete.svg'
import Edit from '../../Assets/svg/edit.svg'


const TodoList = ({todo, delet}) => {

    function editTodo(event){
        let button = event.target.closest('button')
        let buttonOk = button.previousElementSibling
        let todoText = button.nextElementSibling
        button.style.display="none"
        buttonOk.style.display="flex"
        todoText.contentEditable = true
    }

    function saveEdit(event){
        let buttonOk = event.target.closest('button')
        let buttonEdit = buttonOk.nextElementSibling
        let todoText = buttonEdit.nextElementSibling
        buttonOk.style.display="none"
        buttonEdit.style.display="flex"
        todoText.contentEditable = false
    }
    
    return (
        <div className="todoList" data-id={todo.id}>
            <button className="todoList__ok" onClick={ (event)=> saveEdit(event) }>ok</button>
            <button className="todoList__edit" onClick={ (event)=> editTodo(event) }><img src={Edit}/></button>
            <p className="todoList__text">{todo.title}</p>
            <button className="todoList__btn" onClick={()=>{delet(todo.id)}}><img src={Delete} /></button>
        </div>
    )
}

export default TodoList