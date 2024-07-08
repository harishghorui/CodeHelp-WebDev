import React from 'react'
import Template from '../components/Template'
import studentImage from '../assets/signup.png'

function Signup(props) {

  let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div>
      <Template 
        title="Join the millions learning to code with StudyNotion for free"
        desc="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={studentImage}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup