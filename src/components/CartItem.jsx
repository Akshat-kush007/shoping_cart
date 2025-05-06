import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,index}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return(
    <div className="w-full flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow mb-4">
  
  {/* Image Section */}
  <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
    <img src={item.image} alt={item.title} className="h-24 object-contain" />
  </div>

  {/* Details Section */}
  <div className="w-full md:w-3/4 md:pl-6 flex flex-col justify-between space-y-2">
    <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
    
    <div className="flex items-center justify-between mt-2">
      <p className="text-lg font-bold text-green-700">${item.price}</p>
      <button
        onClick={removeFromCart}
        className="text-red-600 hover:text-red-800 text-xl"
      >
        <AiFillDelete />
      </button>
    </div>
  </div>

</div>

  );
};

export default CartItem;
