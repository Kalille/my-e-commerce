import React,{useContext} from 'react'
import {  NavLink,useHistory } from "react-router-dom";
import Button from '../styles/Button';
import styled from "styled-components";
import { UserContext } from '../UserContext';

const NavBar=()=>{
    // const [user] = useContext(UserContext);

    // console.log(user)
 const navigate = useHistory();
    const style= {
        textDecoration: 'none',
        color: "#fff"

    } 
    // function handleLogoutClick() {
    //     fetch("/api/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //        console.log('ok');
    //       }
    //     }).then(navigate.push('/home'));
    //   }
    return(
      
        <div className='nav-container'>
                    <div className='nav-bar'>
            <div className='logo'>
        <h1 style={{ fontFamily: "Permanent Marker, cursive", color: 'red'    }}>Gamers Conquest</h1>
{/* <img src='https://uspto.report/TM/88231502/mark' alt='none available' width={'125px'}/> */}
            </div>
           
            <nav >
 <Button onClick={()=> navigate.push("/loginPage")}>Log in</Button>
                <ul>
                    <li>       
                         <NavLink
                             to='/home'
           
                                style={style}
                                 activestyle={{
                                 color: 'gray',
                                 fontWeight: "bold"
           }}
           >
                  Home
           </NavLink>
           </li>
           <li>       
                         <NavLink
                             to='/games'
           
                             style={style}
                                 activestyle={{
                                 color: 'gray',
                                 fontWeight: "bold"
           }}
           >
                  Games
           </NavLink>
           </li>
           <li>       
                         <NavLink
                             to='/comic'
           
                             style={style}
                                 activestyle={{
                                 color: 'gray',
                                 fontWeight: "bold"
           }}
           >
                 Account
           </NavLink>
           </li>
       
                </ul>
              <Button onClick={()=>navigate.push('/shoppingCart')} >

              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="23px" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
       
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
             </svg>
                  7
                  </Button> 
                {/* <img src='images/cart.png' alt='' width='30px' height='30px'/> */}
         
            </nav>
         
        </div>
        <vr/>
        </div>

    )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  background: linear-gradient(blue)
`;
export default NavBar