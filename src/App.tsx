import NavBar from "./components/NavBar";
import dataType from "./components/types";
import React, { useCallback } from "react";
import { cartType } from "./components/types";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ProductsPage from "./components/pages/ProductsPage";
import DetailsPage from "./components/pages/DetailsPage";

function App() {

  const [cart,setCart] = React.useState<cartType[]>([])

  const addtoCart=useCallback((item:dataType)=>{
    setCart((prevCart:cartType[])=>{
      const isItemInCart = prevCart.find((cartItem:cartType)=>cartItem.id === item.id)
      if(isItemInCart){
        return prevCart.map((cartItem:cartType)=>cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity+1}:cartItem)
      }
      return [...prevCart,{...item,quantity:1}]
    })
  },[])

  const removefromCart = useCallback((item:dataType) => {
    setCart((prevCart:cartType[])=>{
      const isItemInCart = prevCart.find((cartItem:cartType)=>cartItem.id === item.id)
      if(isItemInCart){
        if(isItemInCart.quantity === 1){
          return prevCart.filter((cartItem:cartType)=>cartItem.id !== item.id)
        }
        return prevCart.map((cartItem:cartType)=>cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity-1}:cartItem)
      }
      return [...prevCart]

  })

  },[])

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<NavBar cart={cart} setCart={setCart} addtoCart={addtoCart} removefromCart={removefromCart} />} >
        <Route path="/" element={<ProductsPage addtoCart={addtoCart}></ProductsPage>}/>
        <Route  path="details/:id" element={<DetailsPage addtoCart={addtoCart}></DetailsPage>}></Route>
      </Route>
     </Routes>
    </BrowserRouter>   
  );
}

export default App;
