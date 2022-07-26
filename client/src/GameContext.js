import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";

const GameContext = createContext();

function GameProvider({ children }) {
  const [merch, setMerch] = useState([]);

  const { cart } = useContext(CartContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("/api/products");
  //     const json = await data.json();
  //     setMerch(json);
  //   };
  //   fetchData();
  // }, [cart]);

  useEffect(()=>{
    fetch('/api/products')
    .then(res=>res.json())
    .then((data)=>{
      setMerch(data)   
    })
    .catch(err=>alert(err.errors))
  },[cart])

  console.log(cart)
  return (
    <GameContext.Provider value={{ merch, setMerch }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };
