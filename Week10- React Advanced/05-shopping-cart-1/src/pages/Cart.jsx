import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';

const Cart = () => {

  const items = useSelector(state => state.cart)
  // const {items} = useSelector(state => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(items.reduce((accu, curr) => (accu + curr.price), 0))
  }, [items])

  return (
    <div>
      {
        items.length > 0 ?

        (<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10'>

          <div className='md:max-w-[60%]'>
            {
              items.map((item, index) => (
                  <div key={item.id}>
                    <CartItem item={item} itemIndex={index} />
                  </div>
              ))
            }
          </div>

          <div className='w-[90%] md:w-[40%] mx-auto my-16 flex flex-col justify-between'>

            <div className='mt-10'>
              <p className='text-green-800 font-semibold text-xl'>YOUR CART</p>

              <p className='text-green-700 font-semibold text-5xl'>SUMMARY</p>

              <p className='text-gray-700 mt-5 font-semibold text-xl'>Total Items: 
                <span className='text-black font-medium'> {items.length}</span>
              </p>

            </div>

            <div className='w-full space-y-5'>
              <p className='text-gray-700 mt-5 font-semibold text-xl'>Total Amount
                <span className='text-black font-bold'> : ${parseFloat(totalAmount.toFixed(2))}</span>
              </p>

              <button className=' w-full md:w-[90%] bg-green-700 p-3 text-white text-xl font-bold rounded-lg
               hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-green-700 hover:text-green-700
               transition duration-500'>
                Checkout Now
              </button>

            </div>
            
          </div>

        </div>) :

        (
          <div className=' min-h-[80vh] flex flex-col justify-center items-center'>
            <p className='mb-5 font-semibold text-xl tracking-wide text-gray-700'>Your cart is empty!</p>

            <NavLink to='/'>
              <button 
              className=' bg-green-600 py-3 px-10 text-white font-bold rounded-lg
               hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-green-600 hover:text-green-600
               transition duration-500'>
                SHOP NOW
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
