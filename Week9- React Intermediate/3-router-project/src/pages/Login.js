import React from 'react'
import Template from '../components/Template'
import studentImage from '../assets/login.png'

function Login(props) {

    let setIsLoggedIn = props.setIsLoggedIn

    return (
        <div>
            <Template 
                title="Welcome Back"
                desc="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={studentImage}
                formType="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Login