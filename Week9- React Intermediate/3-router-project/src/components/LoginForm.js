import React, { useState } from 'react'
import { LuEye, LuEyeOff } from "react-icons/lu";
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

function LoginForm(props) {

  let setIsLoggedIn = props.setIsLoggedIn

  const navigate = useNavigate()

  const [showPass, setShowPass] = useState(false)

  const [formData, setFormData] = useState({
    email : "",
    password : "",
  })

  // console.log(formData)
  function changeHandler(event) {
    
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name] : event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault()
    navigate("/dashboard")
    toast.success('Logged In')
    setIsLoggedIn(prev => !prev)
    console.log(formData)
  }

  return (
    <form onSubmit={submitHandler}>

      <label htmlFor="">
        <div>
          <p>
            Email Address
          </p>
          <sup>*</sup>
        </div>
        
        <input type="email"
          required
          name="email"
          id="email"
          placeholder='Enter email id'
          onChange={changeHandler}
          value={formData.email}
        />

      </label>

      <label htmlFor="">
        <div>
          <p>
            Password
          </p>
          <sup>*</sup>
        </div>
        
        <input type={(showPass) ? ("text") : ("password")}
          required
          name="password"
          id="password"
          placeholder='Enter password'
          onChange={changeHandler}
          value={formData.password}
        />

        <span onClick={() => {setShowPass(prev => !prev)}} 
          className='cursor-pointer'>
          {
            (showPass) ? <LuEye /> : <LuEyeOff />
          }
        </span>

        <Link to="#">
          <p>
            Forgot Password
          </p>
        </Link>
        
      </label>

      <button>
        Sign In
      </button>

    </form>
  )
}

export default LoginForm