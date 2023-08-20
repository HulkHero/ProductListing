import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {Link} from 'react-router-dom'
import dataType from '../types'
type Props = {
  addtoCart:(item:dataType)=>void
}

const DetailsPage = ({addtoCart}: Props) => {
   console.log("details page rendered")
    const {id} = useParams<{id:string}>()
    const {data:arrayData,isLoading,error}= useFetch(id)
    const data =  arrayData && arrayData[0]


  return (
    <div className='bg-gray-200 pt-24 mb-5 min-h-screen'>
      <div className='mx-5 my-2 '>
        <Link to="/" className='px-5 py-1 rounded-full bg-gray-400 font-semibold text-xl ' >&#8592;</Link>
      </div>
        {isLoading && <div className='text-center'>Loading...</div>}
        {error && <div>{error}</div>}
        {
            data &&
            <div className='bg-white rounded-xl md:w-[80%] mt-4 mx-auto p-5'>
            <div >
                 <img className='mx-auto w-[300px] h-[300px]' src={data.image}/>
            </div>    
            <h1 className='my-4 font-bold text-3xl'>{data.title}</h1>
            <div className='text-base mb-4' >
                {data.description}
             </div>
             <div>
                 Price: ${data.price}
              </div>
              <div>
                 Category: {data.category}
              </div>
              <div className='flex '>
                  <div className='my-auto align-middle'>
                      Rating: {data.rating.rate}&#11088;
                   </div>   
                  <div className='text-xs text-center  align-text-bottom '>
                    {data.rating.count}
                  </div>
                </div>
                <div className='my-4'>
                    <button onClick={()=>{addtoCart(data)}} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Add to Cart</button>
                </div>
        </div>
        }
    </div>
  )
}

export default DetailsPage