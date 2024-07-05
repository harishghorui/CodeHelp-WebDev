import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    function clickHandler() {
        navigate("/")
    }

    return (
        <div>
            <div>About Page</div>

            <button onClick={clickHandler}>Go to Home</button>
        </div>
    )
}

export default About