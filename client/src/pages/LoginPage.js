import { useState, useContext} from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import SignUpForm from "../components/SignUp";
import LoginForm from "../components/LoginForm";
import { UserContext } from '../UserContext';



function LoginPage({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    const [user,setUser] = useState(null);
  
    return (
      <Wrapper>
        <Logo>Gamers Conquest</Logo>
        {showLogin ? (
          <>
            <LoginForm  />
            <Divider />
            <p>
              Don't have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm  />
            <Divider />
            <p>
              Already have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </p>
          </>
        )}
      </Wrapper>
    );
  }
  
  const Logo = styled.h1`
    font-family: "Permanent Marker", cursive;
    font-size: 3rem;
    color: red;
    margin: 8px 0 16px;
  `;
  
  const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
  `;
  
  const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
  `;
  
  export default LoginPage;
  