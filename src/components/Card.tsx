import React from 'react'

import dataType from './types'
import { Link } from 'react-router-dom'
import {memo} from 'react'


const Card = ({item,addtoCart} :{item:dataType,addtoCart:(item:dataType)=>void}) => {
    console.log("card rendered ",item.id)
  return (
    <div className="hover:ring-2 hover:ring-green-400 flex flex-col p-4 col-span-1  rounded-lg shadow-lg">
    <img  className='w-full mx-auto max-h-[300px]'  src={item.image} alt={item.title} />
    <div className='px-2 h-full flex flex-col gap-4 mt-4 '>
      <div className="px-2 flex-grow-[2]">
        <div className="font-bold text-xl mb-2">
          <Link to={`/details/${item.id}`} className='hover:underline' >{item.title.slice(0,40)+" ..."}</Link></div>
      </div>
      <div className="">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Category: {item.category}
        </span>
      </div>
    <div className="">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: ${item.price}
        </span>
    </div>
    <div className='mt-2 mb-0 flex-grow-0 flex justify-between '>

   
    <div>
       <button onClick={()=>{addtoCart(item)}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
    </div>
    </div>
    </div>

  </div>
  )
}

export default memo(Card)