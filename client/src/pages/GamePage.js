import React, {useEffect,useState, useContext}from 'react'
import { GameContext } from '../GameContext';



const GamePage=()=>{
const merch = useContext(GameContext)
console.log(merch)
    return(
        <div className='game-header'>Game page
        <div className='game-col-2'>
stuff
        </div>
        <div className='game-col-2'>
stuff
        </div>
        
        
        
        </div>
    )
}

export default GamePage