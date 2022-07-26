import React, { useContext, useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "../styles/Button";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);

  const avatar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  );

  useEffect(() => {
    fetch("/api/carts").then((r) => {
      if (r.ok) {
        r.json().then((r) => setCart(r));
      }
    });
  }, [setCart]);

  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      })
      .then(navigate.push("/home"));
  }
  const navigate = useHistory();
  const style = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="logo">
          <h1 style={{ fontFamily: "Permanent Marker, cursive", color: "red" }}>
            Gamers Conquest
          </h1>
          <h4>{!user ? "We Are Waiting For You" : user.username} </h4>
        </div>

        <nav>
          {!user ? (
            <Button onClick={() => navigate.push("/loginPage")}>Log in</Button>
          ) : (
            <Button onClick={handleLogoutClick}>Logout</Button>
          )}
          <ul>
            <li>
              <NavLink
                to="/home"
                style={style}
                activestyle={{
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/games"
                style={style}
                activestyle={{
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                Games
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                style={style}
                activestyle={{
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <Button onClick={() => navigate.push("/shoppingCart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="23px"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            {cart?.length > 0 ? cart?.length : null}
          </Button>
        </nav>
      </div>
    </div>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  background: linear-gradient(blue);
`;
export default NavBar;
