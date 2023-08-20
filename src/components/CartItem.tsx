import React, { memo } from 'react'
import { cartType } from './types'
import dataType from './types'
type Props = {
    item:cartType,
    addtoCart:(item:dataType)=>void,
    removefromCart:(item:dataType)=>void,
}

const CartItem = ({item,addtoCart,removefromCart}: Props) => {

  return (
    <div  className='bg-yellow p-4'>
    <div>
        <h1>{item.title}</h1>
    </div>
    <div>Total Kuantity: { item.quantity}</div>
    <div>Total Amount: ${ item.quantity*item.price}</div>
    <div className='flex justify-center'  >
       <button onClick={()=>{removefromCart(item)}} disabled={item.quantity===0?true:false  } className='bg-red-500 hover:bg-red-700 px-2 py-1' >-</button>
       <div className='text-center align-middle bg-white min-w-[50px]' >{item.quantity}</div>
        <button onClick={()=>{addtoCart(item)}} className='bg-green-500 hover:bg-green-700 px-2 py-1' >+</button>
     </div>
  </div>
  )
}

export default memo(CartItem)