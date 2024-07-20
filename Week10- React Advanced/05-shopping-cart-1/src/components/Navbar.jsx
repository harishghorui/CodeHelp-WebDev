import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from '../assest/logo.png'

const Navbar = () => {

  const cartItems = useSelector(state => state.cart)

  return (
    <div className="w-full text-white">

      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to='/'>
          <img src={logo} alt=""  className="ml-5 h-14"/>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to='/'>
            <p className="hover:text-green-400">Home</p>
          </NavLink>

          <NavLink to='/cart'>

            <div className="relative">
              <FaShoppingCart className="text-2xl hover:text-green-400" />

              {
                cartItems.length > 0 && 
                
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white" 
                >
                  {cartItems.length}
                </span>
              }
            </div>

          </NavLink>
        </div>
        
      </nav>

    </div>
    
  )
};

export default Navbar;
