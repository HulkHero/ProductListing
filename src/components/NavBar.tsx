import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import dataType from './types'
import Cart from "./Cart";
import { cartType } from "./types";

type Props = {
  cart:cartType[],
  addtoCart:(item:dataType)=>void,
  removefromCart:(item:dataType)=>void,
  setCart:React.Dispatch<React.SetStateAction<cartType[]>>
}

const NavBar = (props: Props) => {
  const {cart,addtoCart,removefromCart,setCart} = props

  const [showCart,setShowCart] = React.useState<boolean>(false)

  const handleDisplayCart = () => {
    setShowCart(!showCart)
  }
  return (
    <>
    <div className=" fixed w-full bg-white shadow-md flex justify-between p-4 text-2xl  ">
      <div className='text-green-800 py-2 font-bold'>
         Hulk Store
      </div>
      <div className=' font-semibold'>
       <button onClick={()=>{handleDisplayCart()}} className='bg-green-500 rounded-lg align-middle hover:bg-green-700 px-4 py-2 text-white' > Cart</button> 
      </div>
      <Cart showCart={showCart} item={cart} addtoCart={addtoCart} removefromCart={removefromCart} setCart={setCart}  ></Cart>
       
      
    </div>
    <Outlet/>

    </>


  )
}
export default memo(NavBar)