import './TodoApp.css'
import { useState } from 'react'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

// 사용자 이름, 비밀번호
function LoginComponent() {

    const [username, setUsername] = useState('input name')

    const [password, setPassword] = useState('')

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}