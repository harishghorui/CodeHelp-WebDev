import React, { useState } from 'react'
import { LuEye, LuEyeOff } from "react-icons/lu";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm(props) {

  let setIsLoggedIn = props.setIsLoggedIn

  const navigate = useNavigate()

  const [passwordIcon, setPasswordIcon] = useState({
    password : false,
    confPassword : false,
  })

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confPassword : "",
  })

  function passwordHandler(field) {

    setPasswordIcon(prev => (
      {
        ...prev,
        [field] : !prev[field]
      }
    ))

  }

  function changeHandler(event) {

    setFormData(prev => (
      {
        ...prev,
        [event.target.name] : event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault()
    if(formData.password !== formData.confPassword) {
      toast.error("Passwords do not match")
    }
    else {
      navigate("/dashboard")
      setIsLoggedIn(prev => !prev)
      toast.success("Account Created")
      console.log(formData)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      
      <div className='flex gap-3'>
        <button>
          Student
        </button>

        <button>
          Instructor
        </button>
      </div>

      <div className='flex'>
        <label htmlFor="">
          <div>
            <p>First Name</p>

            <sup>*</sup>
          </div>

          <input type="text" 
            name='firstName'
            placeholder='Enter first name'
            onChange={changeHandler}
            value={formData.firstName}
          />
        </label>

        <label htmlFor="">
          <div>
            <p>Last Name</p>

            <sup>*</sup>
          </div>

          <input type="text" 
            name='lastName'
            placeholder='Enter last name'
            onChange={changeHandler}
            value={formData.lastName}
          />
        </label>
      </div>

      <label htmlFor="">
        <div>
          <p>Email Address</p>

          <sup>*</sup>
        </div>

        <input type="email" 
          name='email'
          placeholder='Enter email address'
          onChange={changeHandler}
          value={formData.email}
        />
      </label>

      <div className='flex'>
        <label htmlFor="">
          <div>
            <p>Create Password</p>

            <sup>*</sup>
          </div>

          <input type={(passwordIcon.password) ? ("text") : ("password")}
            name='password'
            placeholder='Enter password'
            onChange={changeHandler}
            value={formData.password}
          />

          <span onClick={() => passwordHandler("password")} 
            className='cursor-pointer'>
            {
              (passwordIcon.password) ? <LuEye /> : <LuEyeOff />
            }
          </span>
        </label>

        <label htmlFor="">
          <div>
            <p>Confirm Password</p>

            <sup>*</sup>
          </div>

          <input type={(passwordIcon.confPassword) ? ("text") : ("password")} 
            name='confPassword'
            placeholder='Confirm Password'
            onChange={changeHandler}
            value={formData.confPassword}
          />

          <span onClick={() => passwordHandler("confPassword")}
            className='cursor-pointer'>
            {
              (passwordIcon.confPassword) ? <LuEye /> : <LuEyeOff />
            }
          </span>
        </label>
      </div>
      
      <button>
        Create Account
      </button>

    </form>
  )
}

export default SignupForm