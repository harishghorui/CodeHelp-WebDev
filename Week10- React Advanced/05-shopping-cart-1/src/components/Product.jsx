import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, add } from "../redux/Slices/CartSlice";
import toast from 'react-hot-toast';


const Product = ({product}) => {
  
  const cartItems = useSelector(state => state.cart);
  // const {cartItems} = useSelector(state => state)
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(product.id))
    toast.error('Item removed from cart!')
  }

  const addItem = () => {
    dispatch(add(product))
    toast.success('Item added to cart!')
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {product.title}
        </p>
      </div>
        
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
        <img src={product.image} alt="" className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">

        <div>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>

        {
          cartItems.some(cartItem => cartItem.id == product.id) ?
          
          (<button onClick={removeItem}
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            REMOVE ITEM
          </button>) :

          (<button onClick={addItem}
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            ADD TO CART
          </button>)
        }

      </div>
    </div>
  )
};

export default Product;
