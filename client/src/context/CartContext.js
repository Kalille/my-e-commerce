import { createContext,useState,useEffect} from "react";
import { UserContext } from "../UserContext";

const CartContext= createContext();

function CartProvider({children}){
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        const  fetchData = async ()=>{
          const data = await fetch('/api/carts');
          const json = await data.json();
          setCart(json);
        }
    fetchData()
      },[])
  
    return(
        <CartContext.Provider value={{cart,setCart}}>
    
            {children}
        </CartContext.Provider>)

}


export {CartContext, CartProvider}