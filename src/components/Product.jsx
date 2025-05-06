import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/Slices/CartSlice";

function Product({post}){

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  function removeFromCart(){
    
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
  }
  
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 sm:ml-5  rounded-xl">
      
      <h3 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
        {post.title}
      </h3>

    
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      

      <div className="h-[180px]">
        <img src={post.image}  className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold"> ${post.price}</p>
      
        {
          cart.some((p)=>p.id==post.id) ? 
          (<button onClick={removeFromCart}
          className="text-grey-700 border-2  border-gray-700 font-semibold rounded-full text-[12px] tracking-wide uppercase px-3 py-1 hover:text-white hover:bg-gray-700">
            Remove Item
          </button>) : 
          (<button onClick={addToCart}
            className="text-grey-700 border-2  border-gray-700 font-semibold rounded-full text-[12px] tracking-wide uppercase px-3 py-1 hover:text-white hover:bg-gray-700">
            Add to Cart
          </button>)
        }
      
      </div>
    </div>
  );
};

export default Product;
