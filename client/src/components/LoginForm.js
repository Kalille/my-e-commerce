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
  };

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