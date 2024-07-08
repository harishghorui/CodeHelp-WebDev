import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import frame from '../assets/frame.png'

function Template({title, desc, desc2, image, formType, setIsLoggedIn}) {

    return (
        <div>
            <div>
                <h1>
                    {title}
                </h1>

                <p>
                    <span>{desc}</span>
                    <span>{desc2}</span>
                </p>

                {
                    formType === "login" ?
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) :
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) 
                }

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    Sign In with Google
                </button>
                
            </div>

            <div>
                <img src={frame}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading='lazy'
                />

                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading='lazy'
                />
            </div>

        </div>
    )
}

export default Template