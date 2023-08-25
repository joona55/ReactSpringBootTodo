import { Link, useParams } from 'react-router-dom'
import axios, { Axios } from 'axios'

export default function WelcomeComponent() {

    const {username} = useParams()

    function callHelloWorldRestApi() {
        console.log('called')
        // REST API 호출 프레임워크 : axios 
        axios.get('http://localhost:8080/hello-world')
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup') )
    }

    function successfulResponse(response) {
        console.log(response)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="WelcomeComponent">
            <h1>Welcome Todo Board. {username}</h1>
            <div>
                Your todos. <Link to="/todos">Go Todo Page</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Call Hello Wolrd REST API
                </button>
            </div>
        </div>
    )
}