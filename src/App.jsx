import { useRef, useState } from "react"
import TodoList from "./Components/TodoList/TodoList"



const Todo = () => {
    
    const [todoArr, setTodoArr] = useState([])
    console.log(todoArr);
    const inputRef = useRef()

    
    if(localStorage.getItem('todos')){
        if(JSON.parse(localStorage.getItem('todos')).length !== 0 && todoArr.length === 0)
        setTodoArr(JSON.parse(localStorage.getItem('todos')))
    }


    localStorage.setItem('todos', JSON.stringify(todoArr))


    function addTodo() {
        if(inputRef.current.value !== ''){
        let todoId = todoArr.length > 0 ? todoArr[todoArr.length-1].id + 1 : 1

        let todo = {
            id: todoId,
            title: inputRef.current.value
        }

        inputRef.current.value = ''
        setTodoArr(state => [...state, todo])
        }
    }

    
    let countOfTasks = todoArr.length > 0 ? `You have ${todoArr.length} tasks` : 'You have not tasks'

    
    return (
        <div className="container">
            <div className="block">
                <div className="card">
                    <h2 className="title">Todo app</h2>


                    <div className="todo">
                        <input type="text" autoComplete="off" className="todo__input" ref={inputRef}/>
                        <button className="todo__btn" id="todo_btn" onClick={addTodo}></button>
                    </div>


                    <div className="todo__block">
                        {
                            todoArr.map((elem, index)=> <TodoList key={index} todo={elem} setTodoArr={setTodoArr} />)
                        }
                    </div>


                    <div className="todoInfo">
                        <p className="todoInfo__text">{countOfTasks}</p>
                        <button className="todoInfo__btn" onClick={() => setTodoArr([])}>Clear all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo