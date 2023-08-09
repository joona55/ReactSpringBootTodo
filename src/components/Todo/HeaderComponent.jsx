import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function HeaderComponent() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.logout()
    }

    console.log(authContext)

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="nav-link ms-2 fs-2 fw-bold text-gray" href="https://github.com/joona55">joona55</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-3 fs-5">
                                <li className="nav-item">
                                    {isAuthenticated && <Link className="nav-link" to="/welcome">Home</Link>}
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item">
                                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item">
                                {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}