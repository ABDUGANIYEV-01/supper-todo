import { useState } from "react"
import TodoList from "../TodoList/TodoList"



const Todo = () => {
    
    let [todoArr, setTodoArr] = useState([])

    function addTodo() {    
        let todoInput = document.querySelector('.todo__input')
        if(todoInput.value !== ''){
        let todoId = todoArr.length > 0 ? todoArr[todoArr.length-1].id + 1 : 1
        let todo = {
            id: todoId,
            title: todoInput.value
        }
        todoInput.value = ''
        setTodoArr(state => [...state, todo])
        }
    }

    function deletTodo(id){
        setTodoArr(state => state.filter(state => state.id !== id))
    }
    
    function clearAll(){
        setTodoArr(state => state=[])
    }
    
    let countOfTasks = todoArr.length > 0 ? `You have ${todoArr.length} tasks` : 'You have not tasks'

    
    return (
        <div className="container">
            <div className="block">
                <div className="card">
                    <h2 className="title">Todo app</h2>


                    <div className="todo">
                        <input type="text" autoComplete="off" className="todo__input" id="todo_input" />
                        <button className="todo__btn" id="todo_btn" onClick={addTodo}></button>
                    </div>


                    <div className="todo__block" id="todo_block">
                        {
                            todoArr.map((element, index)=> {
                                return <TodoList key={index} todo={element} delet={deletTodo}/> 
                            })
                        }
                    </div>


                    <div className="todoInfo">
                        <p className="todoInfo__text" id="todo_info">{countOfTasks}</p>
                        <button className="todoInfo__btn" id="todo_clear" data-task="clearAll" onClick={clearAll}>Clear all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo