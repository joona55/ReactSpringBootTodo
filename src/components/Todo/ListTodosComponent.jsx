import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosUsername, retrieveAllTodosUsernameApi } from "./api/TodoApiService";

export default function ListTodosComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    useEffect(() => refreshTodos, [])

    function refreshTodos() {
        retrieveAllTodosUsernameApi('joona55')
        .then(response => {
            console.log(response.data)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodos(id) {
        console.log('clicked ' + id)
        deleteTodoApi('joona55', id)
        .then(
            setMessage(`Delete of todo with ${id} success`),
            refreshTodos()
        )
        .catch(error => console.log(error))
    }
    
    return (
        <div className="container">
            <h1>To do List</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                // 리스트를 사용할 때 key 값 설정을 통해 각 요소가
                                // 유일한 키를 갖게 해야한다.
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" 
                                                onClick={() => deleteTodos(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}