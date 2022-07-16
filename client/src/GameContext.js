import { createContext,useState,useEffect} from "react";

const GameContext= createContext();

function GameProvider({children}){
    const [merch, setMerch]=useState([]);

    useEffect(()=>{
        const  fetchData = async ()=>{
          const data = await fetch('/api/products');
          const json = await data.json();
          setMerch(json);
        }
    fetchData()
      },[])
    return(
        <GameContext.Provider value={{merch,setMerch}}>
    
            {children}
        </GameContext.Provider>)

}


export {GameContext, GameProvider}

