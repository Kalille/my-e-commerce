import React from "react";
import { GameContext } from '../GameContext';


const ProductList = ()=> {


    return(

        <div className='game-container'>
        <div className='product-grid'>
            <div className='product-card' >
                <img src='' alt='fh' className='card-img'/>
            </div>
            <div className='product-detail'>
                <span>
                    ypu
                </span>
                <div className='rating'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>  
                     <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half'></i>
                </div>
                <p>
                    description
                </p>
            <div className='buttons'>ff</div>
            <div className='price'>$20</div>
            <button className='cart btn'>add to cart</button>
            <button className='favorite btn'><i className='far fa-heart'>2</i></button>
            </div>

        </div>

        
        
        
        </div>
    )
}

export default ProductList