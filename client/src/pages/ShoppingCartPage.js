import React from "react";

const ShoppingCartPage=()=>{



    return(
        <div className="cart-wrapper">
            <h1>My Cart</h1>
            <div className="project">
                <div className="shop">
                    <div className="box">
                        <img src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/1109/1109148_sa.jpg" alt='none'/> 
                        <div className="cart-content">
                            <h3>Item Name</h3>
                            <h4>Price: 39.99</h4>
                            <p className="unit">Quantity</p>
                            <p className="btn-area">
                                <i className="fa fa-trash">
                                    <span className="btn-2">remove</span>
                                </i>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
<div className="right-bar">
    <p><span>subtotal</span>$44</p>
    <hr/>
    <p><span>Tax (8%)</span><span>$22</span></p>
    <hr/>
    <p><span>Shipping</span><span>$4.99</span></p>
    <hr/>
    <p><span>Total</span><span>$22</span></p>
    <a href="/"><i className="fa fa-shopping-cart"></i>Checkout</a>
</div>

        </div>
    )
}


export default ShoppingCartPage