import React, { useState,useEffect } from 'react'
import './Dice.css'
export const Dice = () => {
    const diceFaces = [
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg", 
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"  
      ];
    const [dice1,setDice1] = useState(diceFaces[0]);
    const [dice2,setDice2] = useState(diceFaces[0]);
    const onClick=()=>{
        setDice1(()=>{return diceFaces[Math.floor(Math.random() * 6)]});
        setDice2(()=>{return diceFaces[Math.floor(Math.random() * 6)]});
        
    }
    
  return (
    <div className="card">
        <div className="card-overlay"></div>
        <div className="card-inner">
            {/* <button onClick={onClick}>Clickme</button> */}
            <img onClick={onClick} src={dice1} alt="" />
            <img onClick={onClick} src={dice2} alt="" />
        </div>
    </div>
  )
}