import React from 'react'
import logoImg from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn

    function logoutHandler() {
        setIsLoggedIn(prev => !prev)
        toast.success('Logged Out')
    }

    return (
        <div className='flex justify-evenly'>
            <Link to="/">
                <img src={logoImg} alt="" />
            </Link>
        
            <nav>
                <ul className='flex gap-3'>
                
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    
                </ul>
            </nav>

            <div className='flex gap-3'>

                { !isLoggedIn &&
                    <Link to='/login'>
                        <button>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to='/signup'>
                        <button>
                            Sign up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to='/login'>
                        <button onClick={logoutHandler}>
                            Logout
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to='/dashboard'>
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar