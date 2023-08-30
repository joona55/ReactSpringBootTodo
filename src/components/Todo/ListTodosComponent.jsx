import { useEffect, useState } from "react";
import { retrieveAllTodosUsername } from "./api/TodoApiService";

export default function ListTodosComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const [todos, setTodos] = useState([])

    useEffect(() => refreshTodos, [])

    function refreshTodos() {
        retrieveAllTodosUsername('joona55')
        .then(response => {
            console.log(response.data)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="container">
            <h1>To do List</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                // 리스트를 사용할 때 key 값 설정을 통해 각 요소가
                                // 유일한 키를 갖게 해야한다.
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
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