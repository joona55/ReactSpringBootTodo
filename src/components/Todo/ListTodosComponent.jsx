export default function ListTodosComponent() {

    const today = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const todos = [
                    {id: 1, description: 'sample 1', done: false, targetDate: targetDate},
                    {id: 2, description: 'sample 2', done: true, targetDate: targetDate},
                    {id: 3, description: 'sample 3', done: false, targetDate: targetDate},
                    {id: 4, description: 'sample 4', done: true, targetDate: targetDate}]

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
                                // ����Ʈ�� ����� �� key �� ������ ���� �� ��Ұ�
                                // ������ Ű�� ���� �ؾ��Ѵ�.
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
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