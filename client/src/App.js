import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import NavBar from './components/NavBar';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import { GameContext } from './GameContext';
import LoginForm from './/components/LoginForm';
import { UserContext } from './UserContext';
import SignUp from './/components/SignUp';
import LoginPage from './pages/LoginPage';
import ShoppingCartPage from './pages/ShoppingCartPage';


function App() {
  const [user, setUser] = useState(null);
  const [gameData, setGameData]= useState('')

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(user)
  useEffect(()=>{
      fetch('/api/products')
      .then(res=>res.json())
      .then(res=> setGameData(res))

  },[])
  return (
    <div className="App">
<NavBar/>
<Switch>
  <UserContext.Provider value={{user, setUser}}>
  <GameContext.Provider value={gameData}>
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


           </GameContext.Provider>
           </UserContext.Provider >
</Switch>
    </div>
  );
}

export default App;
