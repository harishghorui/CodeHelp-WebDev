import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from 'react-hot-toast';


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart)

  const removeItem = () => {
    dispatch(remove(item.id))
    toast.error('Item removed from cart!')
  }

  return (
    <div className="">

      <div className="md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center gap-14 my-10">

        <div className=" max-w-[30%] ">
          <img src={item.image} alt="" />
        </div>

        <div className="flex flex-col gap-5 w-[90%] md:max-w-[70%] md:self-start">

          <h1 className="font-semibold text-gray-700 text-xl">
            {item.title}
          </h1>

          <h1 className="text-gray-700">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>

          <div className="flex justify-between items-center">
            <p className=" text-green-600 font-bold text-lg">
              ${item.price}
            </p>

            <div onClick={removeItem}
            className=" h-10 w-10 bg-red-200 text-red-800 rounded-full 
            flex justify-center items-center hover:text-white hover:bg-red-400 cursor-pointer">
              <MdDelete />
            </div>

          </div>

        </div>

      </div>

      {
        itemIndex+1 < cartItems.length && 

        <div className=" w-11/12 mx-auto h-[1.5px] bg-gray-500"></div>
      }

    </div>
  )
};

export default CartItem;
