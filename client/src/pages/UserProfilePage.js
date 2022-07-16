import React, {useContext} from "react";
import { UserContext } from '../UserContext';

const UserProfilePage = () =>{
    const {user} = useContext(UserContext);
    console.log(user)
    const thumbsUpIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>

</svg>



    return(

        <div className="profile-wrapper">
          
           
                <div className="left">

                    <img style={{width:"150px"}} src={user?.image_url} alt='none available'/>

                    <h4>{user?.username} </h4>
                </div>
                <div className="right">
        <div className='profile-info'>
            <h3>info</h3>
            <div className='info-data'>
                <div className='profile-data'>
                    <h4>email</h4>
                    <p>{user?.email}</p>
                </div>
                <div className='profile-data'>
                    <h4>Orders</h4>
                    <p>total amount</p>
                </div>
            </div>
        </div>


        <div className='profile-pro'>
            <h3>info</h3>
            <div className='pro-data'>
                <div className='profile-data'>
                    <h4>Liked Products</h4>
                    <p>{user?.products.length}</p>
                </div>
                <div className='profile-data'>
                    <h4>Products Reviewed</h4>
                    <p>{user?.reviewed_products.length}</p>
                </div>
            </div>
        </div>
                </div>
             
      
          
           
 
            
            </div>
    )
}


export default UserProfilePage

// {/* <h2>heres what you like so far {user?.username}</h2>

// {user ? user.products.map((likes,i)=>{
//     return       <div key={i} style={{width: "18rem" ,fontWeight: "600", height: "5%"}}>
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item">{likes.name} {thumbsUpIcon}</li>
  
//     </ul>
//     <div className="card-footer">
  
//     </div>
//   </div>
// }):null} */}