import React, { useEffect, useState, useRef, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Input from "../styles/Input";
import Button from "../styles/Button";

const CheckOutPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [total, setTotal] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useHistory();

  const form = useRef();

  const sendEmail = (e) => {
    const params = {
      user_email: user.email,
      to_name: user.username,
      total: total,
    };
    e.preventDefault();

    emailjs
      .send(
        //  process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "service_jcpasx8",
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        "template_mpqdoou",
        params,
        //   process.env.REACT_APP_EMAILJS_USER_ID
        "YDI0u74rcgGXbO-JB"
      )
      .then(
        (result) => {
          alert("Order Submitted ");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    if (total >= 1)
      fetch("/api/check_outs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        //    body: JSON.stringify({

        //  })
      }).then((res) => {
        if (res === 200) res.json().then(setCart([]));
        else {
          res.json().then((err) => setErrors(err.errors));
        }

        sendEmail(e);
        navigate.push("/user");
      });
    else alert("Please Add to Cart");
  };

  useEffect(() => {
    fetch("/api/total")
      .then((res) => res.json())
      .then((res) => setTotal(res));
  }, []);
  return (
    <div className="right-bar">
      <p>
        <span>Name: {user?.username}</span>
      </p>

      <hr />
      <p>
        <span>Email: {user?.email}</span>
        <span></span>
      </p>

      <hr />
      {cart.length > 0
        ? cart.map((item, i) => {
            return (
              <div key={i}>
                <p>
                  <span>{item?.name}</span>
                  <span>${item?.price}</span>
                </p>
                <hr />
              </div>
            );
          })
        : null}

      <hr />
      <p>
        <span>Total:</span>
        <span name="total">{total ? total : 0}</span>
      </p>
      <form>
        <Button onClick={handleCheckOut}>Submit Order</Button>
      </form>
    </div>
  );
};

export default CheckOutPage;
