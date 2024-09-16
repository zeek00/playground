import React, {useEffect, useMemo, useState } from 'react'
import { Logic } from './GameLogic';

const Hex = () => {
    const [color, setColor] = useState("");
    const [score, setScore] = useState(0);
    const [attempt, setAttempt] = useState(0);
    const [items, setItems] = useState([])
    const [success, setSuccess] = useState(false);
    const [submit, setSubmit] = useState(false);
       
    // Memoize the Logic instance to prvent infinte renders
    const hexLogic = useMemo(() => new Logic("hex"), []);

    const generateNewRound = () => {
        const generatedColor = hexLogic.getRandomHexColor();
        setColor(generatedColor);

        const generatedOptions = hexLogic.generateOptions();
        const finalItems = hexLogic.insertAtRandomPosition(generatedOptions, generatedColor);
        setItems(finalItems);
    };

    useEffect(() => {
        // Generate the initial round when the component mounts
        generateNewRound();
    }, [hexLogic]);


    useEffect(() => {
        if(success){
            setScore(score+1);
            setTimeout(() => {
                        // If the guess was correct, generate a new round
                generateNewRound();
                setSubmit(false); // Reset submit state
                setSuccess(false); // Reset success state
            }, 2000); // 2-second delay
        }
       
    }, [success]);

    const handleGuess = (guess)=>{
        setSubmit(true);
        setSuccess(guess === color);
        setAttempt(attempt+1);

    }


  return (
    <div>
        <div className="scoreboard bg-red-500 w-16 h-12 flex justify-center items-center text-3xl font-bold ml-auto mb-auto mr-auto text-slate-950 ">{score}/{attempt}</div>

        <div style={{background: color}} className='animate-bounce rounded-full w-40 h-40 m-auto mt-11 mb-2 '></div>
        <div className="options">
            {items.map((hex, index)=>(
                <button className='hover:animate-pulse hover:bg-red-500 hover:rounded-md bg-slate-800 p-1 m-2 ' onClick={() => handleGuess(hex)} value={hex} key={index}>{hex}</button>
            ))}
        </div>
        {submit && 
        <span className="result">
            {success ? <p className='text-green-500'>Correct!</p> : <p className='text-red-500'>Wrong!</p>}
        </span>}
        {/* this hex game {color} */}

      
    </div>
  )
}

export default Hex
