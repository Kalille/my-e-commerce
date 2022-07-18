import React,{useState,useContext,useEffect,useRef}from "react";
import { CartContext } from '../context/CartContext';
import Button from "../styles/Button";
import { UserContext } from '../UserContext';
import { useHistory } from "react-router-dom";


const ShoppingCartPage=()=>{
    const {cart, setCart} = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [total,setTotal] =useState('')
    const [quantity,setQuantity] =useState('')
    const [errors,setErrors] =useState([])
    const [emailParams, setEmailParams] = useState({
        user_email: user.email,
       
        from_name: 'Gamers Conquest',
        to_name: user.username
    })
    const form = useRef();
    const navigate = useHistory();

    useEffect(()=>{
        const  fetchData = async ()=>{
          const data = await fetch('/api/carts');
          const json = await data.json();
          setCart(json);
        }
    fetchData()
      },[setCart]);
   



  
    useEffect(()=>{
        const  fetchData = async ()=>{
          const data = await fetch('/api/total');
          const json = await data.json();
          setTotal(json);
        }
    fetchData();
      },[setTotal]);
  

   const handleChange=(e)=>{
       setQuantity(e.target.value)
   };
   




    return(
        <div>

            {/* <form ref={form}onSubmit={sendEmail}>
        {/* <input name="user_email"  value={user?.email}/>
        <input name="to_name"  value={user?.username}/>
        <input name="message"  value="Thanks for your purchase"/> */}
        {/* <button>send email</button> */}
            {/* </form> */} 

            {cart? cart?.map((data,i)=>{
                return       <div key={i} className="small-container cart-page">
                <table>
                    <thead>
                    <tr>
                        <th> Game</th>
                        <th> Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td >
                            <div className="cart-stuff">
            <img src={data?.image_url} alt=''/>
            <div>
                <p>{data?.name}</p>
                <small>Price:{data?.price}</small>
                <br/>
             
                <Button onClick={()=>fetch(`/api/line_items/${data.id}`,{method:"DELETE"}).then(alert("Item removed")).then(navigate.push("/games"))}>remove</Button>
            </div>
                            </div>
                        </td>
                       
                        <td><input onChange={handleChange} type='number' /></td>
                        <td>${data?.price}</td>
                    </tr>
                    </tbody>
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
            <Button onClick={ ()=>navigate.push("/checkout")}>Proceed to Checkout</Button>

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