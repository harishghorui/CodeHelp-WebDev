import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
    function clickHandler() {
        navigate("/about")
    }

    return (
        <div>
            <div>Home Page</div>

            <button onClick={clickHandler}>Go to About</button>
        </div>
    )
}

export default Home