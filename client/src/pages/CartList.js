import React from "react";


const CartList =()=>{


    return(

        <div>
         
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
                             
                 <div>
                     <small>Price:</small>
                            <br/>
                 </div>
                            </div>
                        </td>
                       
                        {/* <td><input onChange={handleChange} type='number' /></td> */}
                   
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