import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function CartPage() {

  const {cart}=useSelector((state)=>state);

  const [totalAmount, setTotalAmount]= useState(0);

  
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className="min-h-screen p-6 bg-gray-100">
  {
    cart.length > 0 ? (
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Half - Cart Items */}
        <div className="w-full lg:w-2/3 space-y-4">
          {
            cart.map((item, index) => (
              <CartItem item={item} key={item.id} index={index} />
            ))
          }
        </div>

        {/* Right Half - Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <p className="text-gray-600">Summary</p>
            <p className="mt-2">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold mb-4">
              Total Amount: ₹{totalAmount}
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
              Check Out Now
            </button>
          </div>
        </div>
        
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty!</h2>
        <Link to="/" className="text-blue-600 hover:underline text-lg">
          Shop Now
        </Link>
      </div>
    )
  }
</div>

    // <div>
    //   {
    //     cart.length > 0 ?
    //     (<div>
    //         <div>
    //           {
    //             cart.map((item,index)=> <CartItem item={item} key={item.id} index={index}/>)
    //           }
    //         </div>
    //         <div>
    //           <div>
    //             <div>Your Cart</div>
    //             <div>Summary</div>
    //             <p>
    //               <span>Total Items: {cart.length}</span>
    //             </p>
    //           </div>
    //           <div>
    //             <p>Total Amount: {totalAmount}</p>
    //             <button>Check Out Now</button>
    //           </div>
    //         </div>
    //     </div>) :
    //     (
    //       <div>
    //         <h2>Your cart is empty!</h2>
    //         <Link to="/">
    //           Shop Now
    //         </Link>
    //       </div>
    //     )
    //   }
    // </div>
  )
}
