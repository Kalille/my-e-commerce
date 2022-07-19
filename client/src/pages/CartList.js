import React from "react";


const CartList =()=>{


    return(

        <div>
            {/* {cart ? cart?.map((data,i)=>{
                return      */}
                  <div  className="small-container cart-page">
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
                                 {/* <img src={data?.image_url} alt=''/> */}
                 <div>
                     {/* <p>{data?.name}</p> */}
                     <small>Price:</small>
                            <br/>
             
                {/* <Button onClick={()=>fetch(`/api/line_items/${data.id}`,{method:"DELETE"}).then(alert("Item has been removed")).then(navigate.push("/games"))}>remove</Button> */}
                 </div>
                            </div>
                        </td>
                       
                        {/* <td><input onChange={handleChange} type='number' /></td> */}
                        <td>$0</td>
                    </tr>
                    </tbody>
                </table>
        
    
            </div>

        {/* // }):null} */}

    <div className="total-price">
            <table>
                <tr>
                    <td>subtotal</td>
                    <td>$ 0</td>
                </tr>
            </table>
            </div>
            {/* <Button onClick={ ()=>navigate.push("/checkout")}>Proceed to Checkout</Button> */}

        </div>
    )
} 


export default CartList