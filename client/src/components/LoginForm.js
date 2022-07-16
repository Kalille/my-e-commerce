import React, { useState ,useContext} from "react";
import Button from "../styles/Button";
import FormField from "../styles/FormField";
import Error from "../styles/Error"
import Label from "../styles/Label";
import Input from "../styles/Input";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import { UserContext } from '../UserContext';
import { CartContext } from '../context/CartContext';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate= useHistory()
  const {onLogin,user} = useContext(UserContext)
  const {setCart,cart} = useContext(CartContext)

// console.log(JSON.stringify(user?.id))
// console.log(user?.id)


//   const createCartForUser = async (user) => {
//     const userLoggingIn = user.id
   
// const fetchData= await fetch(`http://localhost:3000/api/carts`, {
//     method: "POST",
//     headers: {"content-type": "application/json"},
//     body: JSON.stringify({
//            user_id: userLoggingIn.id
//     })
//  })
//  const data = await fetchData.json()
//  setCart(data)
//     // .then(res => res.json())
//   //   .then((cart) => {
//   //      console.log(cart, "cart created!")
//   //      setCart(cart)  ;
//   //  })
//  }

//   const checkIfCartExists = async (user) => {
//     const userLoggingIn = user.id
  
//    const fetchData = await  fetch("http://localhost:3000/api/find_cart", {
//      method: "POST",
//      headers: {"content-type": "application/json"},
//      body: JSON.stringify({
//           user_id: userLoggingIn
//      })
//  })

//  const data = await fetchData.json()

//  if (data.id){
//    setCart(data)
//  }
//  else{
//   createCartForUser(userLoggingIn)
//  }
//     // .then(res => res.json())
//     // .then(cart => {
//     //     if(cart.id){
//     //       console.log(cart, "cart already exists!")
//     //       .then(setCart(cart))
//     //         // cart.json().then((err) => setErrors(err.errors));
          
//     //       // currentCart = cart; //set cart as global var currentCart
//     //     } 
//     //     else {
//     //       createCartForUser(userLoggingIn)
         
//     //     }
//     //  })
//  }



  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
        
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user)).then(navigate.push('/home'));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoCompconste="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoCompconste="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors?.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
     {/* Not a Member Yet? &nbsp; <a href='signup' >Sign up</a> */}
    </form>

  );
}

export default LoginForm;