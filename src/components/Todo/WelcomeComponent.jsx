import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'

export default function WelcomeComponent() {

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        console.log('called HelloWorld')
        // REST API 호출 프레임워크 : axios 

        retrieveHelloWorldPathVariable('joona55')
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup') )
    }


    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
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
            <div className="text-info">
                {message}
            </div>
        </div>
    )
}