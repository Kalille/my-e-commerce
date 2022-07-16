import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState,useContext} from "react"
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import { GameContext,GameProvider } from './GameContext';
import LoginForm from './/components/LoginForm';
import { UserProvider } from './UserContext';
import SignUp from './/components/SignUp';
import LoginPage from './pages/LoginPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { UserContext } from '../src/UserContext';
import GameShowPage from './pages/GameShowPage'
import UserProfilePage from './pages/UserProfilePage';
import { CartContext } from '../src/context/CartContext';




function App() {
  // const [user, setUser] = useState(null);
  // const {setMerch} = useContext(GameContext);
  const {user,setUser} = useContext(UserContext);
  const {cart,setCart} = useContext(CartContext)
  // const [gameData, setGameData]= useState('')

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);
  // console.table(user)

  useEffect(()=>{
    const  fetchData = async ()=>{
      const data = await fetch('/api/carts');
      const json = await data.json();
      setCart(json);
    }
fetchData()
  },[setCart])
  useEffect(()=>{
    const  fetchData = async ()=>{
      const data = await fetch('/api/me');
      const json = await data.json();
      setUser(json);
    }
fetchData()
  },[setUser])
  return (
    <div className="App">
    
<NavBar/>
<Switch>
 

<Route path="/home">
            <Home/>
           </Route>
           <Route path="/games">
            <GamePage/>
           </Route>
           <Route path="/login">
            <LoginForm/>
           </Route>
           <Route path="/signup">
            <SignUp/>
           </Route>
           <Route path="/loginPage">
            <LoginPage/>
           </Route>
           <Route path="/shoppingCart">
            <ShoppingCartPage/>
           </Route>
           <Route path="/game/:id">
            <GameShowPage/>
           </Route>
           <Route path="/user">
            <UserProfilePage/>
           </Route>


           
          
</Switch>

    </div>
  );
}

export default App;
