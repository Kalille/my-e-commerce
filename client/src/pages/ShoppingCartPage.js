import React, { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import Button from "../styles/Button";
import { UserContext } from "../UserContext";
import { useHistory } from "react-router-dom";
import CartList from "./CartList";

const ShoppingCartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [total, setTotal] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState([]);

  const form = useRef();
  const navigate = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/carts");
      const json = await data.json();
      setCart(json);
    };
    fetchData();
  }, [setCart]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch("/api/products");
  //       const json = await data.json();
  //       setMerch(json);
  //     };
  //     fetchData();
  //   }, [setMerch]);

  console.log(cart);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/total");
      const json = await data.json();
      setTotal(json);
    };
    fetchData();
  }, [setTotal]);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const deleteItem = (id) => {
    fetch(`/api/line_items/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          alert("deleted");
          // setCart([...cart])
          navigate.push("/games");
        } else {
          r.json().then((err) => alert(err.errors));
        }
      })

      // .then(alert("Item has been removed")).then(navigate.push("/games"))
      .catch((err) => alert(err.errors));
  };

  return (
    <div>
      {cart ? (
        cart?.map((data, i) => {
          return (
            <div key={i} className="small-container cart-page">
              <table>
                <thead>
                  <tr>
                    <th> Game</th>
                    <th> Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="cart-stuff">
                        <img src={data?.image_url} alt="" />
                        <div>
                          <p>{data?.name}</p>
                          <small>Price:{data?.price}</small>
                          <br />

                          <Button onClick={() => deleteItem(data.id)}>
                            remove
                          </Button>
                        </div>
                      </div>
                    </td>

                    <td>
                      <input onChange={handleChange} type="number" />
                    </td>
                    <td>${data?.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <CartList />
      )}

      <div className="total-price">
        <table>
          <tr>
            <td>subtotal</td>
            <td>${total ? total : 0}</td>
          </tr>
        </table>
      </div>
      <Button onClick={() => navigate.push("/checkout")}>
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default ShoppingCartPage;
