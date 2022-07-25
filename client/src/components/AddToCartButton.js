import React, {useState,useContext} from "react";
import Button from "../styles/Button";
import Error from "../styles/Error"
import { useHistory } from "react-router-dom";
import { CartContext } from '../context/CartContext';


const AddToCartButton = ({myGame})=>{
    const {cart,setCart} = useContext(CartContext)
const [quantity,setQuantity]=useState(1)
const navigate = useHistory()
const [product,setProduct] =useState('')
const [errors,setErrors] = useState([])

const handleChange=(e)=>{
    if (e.target.value >= 1)
    setQuantity(e.target.value)


}


    const handleSubmit= async(e)=>{
        e.preventDefault()

  const fetchData = await  fetch("/api/line_items", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
            product_id: myGame,
     
      })
  })
  
  const data = await fetchData.json()
  
        if (data.id){
 
             setCart([...cart,data])
  
 
  }
         else{
             setErrors(data.errors)
  }
             navigate.push('/games')

     
  }
    return(
      
       <div>
                {errors?.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
           <form onSubmit={handleSubmit}>
               {/* <label>Quantity:</label>
               <input onChange={handleChange} type="number" style={{borders:"none"}} placeholder="1"/> */}
               <br/>
               <Button >Add To Cart </Button>
               </form>
          
               </div>
                
              


    )


} 


export default AddToCartButton