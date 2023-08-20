import dataType from "../types";
import Card from "../Card";
import useFetch from "../hooks/useFetch";
import { memo } from "react";
type Props = {
    addtoCart:(item:dataType)=>void
}

const ProductsPage = (props: Props) => {
    const {addtoCart} = props
  
    const {data,isLoading,error} = useFetch()

    console.log("products page rednerd")

  
  
    return (
      <main className="bg-slate-50">
        {isLoading && <div className="pt-24 text-center" >Loading...</div>}
        {error && <div className="pt-24 text-center">{error}</div>}
      <div className="pt-24 max-sm:px-5 sm:px-5 max-sm:w-fill grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-around content-stretch   bg-slate-50 ">
        
      
        {
          data && data.map((item:dataType)=>{
           return (
                  <Card key={item.id} item={item} addtoCart={addtoCart} />
                     )
          })
        }
        </div>
    </main>
  )
}

export default memo(ProductsPage)