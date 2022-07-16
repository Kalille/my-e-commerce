import React from 'react'
// import   fetchAllProductsAsync from './ecommerceSlice'
import { useSelector, useDispatch } from 'react-redux'

const Home=()=>{

    // const dispatch = useDispatch()
    // const products = useSelector((state) => state.ecommerce.products)
    // console.table(dispatch(fetchAllProductsAsync))
    return(
        <div className='home-header'>  
                <div className='home-row'>
        <div className="col-2">
            <h1>Welcome to Gamers Conquest
         
            </h1>
            <p>   Where Your Search For The Hottest Games Is Over!!</p>
            <a href='/' className='explore-button'>explore</a>
        </div>
        <div className='col-2'>
    <img src='https://m.media-amazon.com/images/I/71vzjnUWwtL._AC_SY450_.jpg' alt='Games Galore'/>
   
        </div>



    </div>
    </div>
  

        
    )
}

export default Home