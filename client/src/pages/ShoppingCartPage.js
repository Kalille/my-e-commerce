import React,{useState,useContext,useEffect}from "react";
import { CartContext } from '../context/CartContext';
import Button from "../styles/Button";
import { UserContext } from '../UserContext';

const ShoppingCartPage=()=>{
    const {cart, setCart} = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [total,setTotal] =useState('')
    const [quantity,setQuantity] =useState('')
    useEffect(()=>{
        const  fetchData = async ()=>{
          const data = await fetch('/api/carts');
          const json = await data.json();
          setCart(json);
        }
    fetchData()
      },[setCart])
   
  
  
    useEffect(()=>{
        const  fetchData = async ()=>{
          const data = await fetch('/api/total');
          const json = await data.json();
          setTotal(json);
        }
    fetchData()
      },[setTotal])
  

   const handleChange=(e)=>{
       setQuantity(e.target.value)
   }
   
   
   const handleSubmit=(e)=>{
        e.preventDefault()
    // console.log("clicked add button")
        fetch('/api/add_item',{
           method:"POST", 
           headers: {'Content-Type': 'application/json',
           'Accept':'application/json'},
           body: JSON.stringify({

   
    
         })
        })
}
    return(
        <div>
            {cart? cart?.map((data)=>{
                return       <div className="small-container cart-page">
                <table>
                    <tr>
                        <th>
                            Game
                        </th>
                        <th>
                        quantity
                        </th>
                        <th>Price</th>
                    </tr>
                  
                    <tr>
                        <td >
                            <div className="cart-stuff">
            <img src={data?.image_url} alt=''/>
            <div>
                <p>{data?.name}</p>
                <small>Price:{data?.price}</small>
                <br/>
                {/* <a href="sdv">remove</a> */}
                <Button onClick={()=>fetch(`/api/line_items/${data.id}`,{method:"DELETE"})}>remove</Button>
            </div>
                            </div>
                        </td>
                       
                        <td><input onChange={handleChange} type='number' /></td>
                        <td>${data?.price}</td>
                    </tr>
                </table>
        
    
            </div>

}):null}
    <div className="total-price">
            <table>
                <tr>
                    <td>subtotal</td>
                    <td>${total ? total : 0}</td>
                </tr>
            </table>
            </div>
        </div>

  
//         <div className="cart-wrapper">
//             <h1>My Cart</h1>
//             {cart ? cart?.map((item,i)=>{
//                 return             <div key={i} className="project">
//                 <div className="shop">
//                     <div className="box">
//                         <img src={item?.image_url} alt='none'/> 
//                         <div className="cart-content">
//                             <h3>Title: {item?.name}</h3>
//                             <h4>Price: ${item?.price}       {cart?.line_items ? cart?.line_items?.map((data,i)=>{
//                                                 return console.log(data?.quantity)
//                                                 // <div key={i}>
//                                                 //    Quantity: {data?.quantity}
//                                                 // </div>
//                                }):null}
//                                </h4>
                      
//                             <div className="unit">
//                                 <form onSubmit={handleSubmit}>
//                                     <center>
//                                     {/* Quantity: <input onChange={handleChange} placeholder={item.line_items?.quantity} type="number" style={{borders:"none", marginBottom: "100px"}}/> */}
                          
//                                     </center>
                                   
//                                     </form>
                            
// </div>

//                             <p className="btn-area">
//                                 <i className="fa fa-trash">
//                                    <Button onClick={()=>fetch(`/api/line_items/${item.id}`,{method:"DELETE"})}>remove</Button>
//                                 </i>
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             }):<h1>Feel Free to Browse All of our Exciting Games</h1>}

// <div className="right-bar">
//     {/* <p><span>subtotal</span>$44</p>
//     <hr/>
//     <p><span>Tax (8%)</span><span>$22</span></p>
//     <hr/>
//     <p><span>Shipping</span><span>$4.99</span></p>
//     <hr/> */}
//     <p><span>Total:</span>${total ? total : 0}<span></span></p>
//     <a href="/"><i className="fa fa-shopping-cart"></i>Checkout</a>
// </div>

//         </div>
    )
}


export default ShoppingCartPage