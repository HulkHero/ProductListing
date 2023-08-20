import React, { memo } from 'react'
import dataType from './types'
import { cartType } from './types'
type Props = {
  showCart:boolean,
  item:cartType[],
  addtoCart:(item:dataType)=>void,
  removefromCart:(item:dataType)=>void,
  setCart:React.Dispatch<React.SetStateAction<cartType[]>>

}

const Cart = (props: Props) => {
    const {showCart,item,addtoCart,removefromCart} = props
  return (
    <div className={`absolute ${showCart?"left-0":"-left-[400px]"} transition-all box shadow-xl  top-20  h-[90vh] w-[300px] sm:min-w-[400px] md:[500px] bg-green-200 overflow-y-scroll `} >Cart
    <div>
        
        {item &&
        item.map((item:cartType)=>{
          return(
            <div key={item.id} className='bg-yellow p-4'>
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
                    )})}
    </div>
    </div>
  )
}

export default Cart