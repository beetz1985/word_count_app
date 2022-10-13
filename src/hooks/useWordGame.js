import React, {useState, useEffect, useRef} from "react"

function useWordGame(gameTime = 10) {

    

    const [text, setText] = React.useState('');
    const [timeRemaining, setTimeRemaining] = React.useState(gameTime)
    const [gameRunning, setGameRunning] = React.useState(false)
    const [wordCount, setWordCount] = React.useState(0)
    const inputRef = useRef(null)

    
    React.useEffect(()=>{
        if(timeRemaining > 0 && gameRunning) {
            setTimeout(()=>{
                setTimeRemaining((s)=>s - 1)
            }, 1000)    
        } else if(timeRemaining === 0) {
            setGameRunning(false)
            setWordCount(calculateWordCount(text))
        }
    }, [timeRemaining, gameRunning])


    function handleStartClick() {
        setGameRunning(true)
        setWordCount(0)
        setTimeRemaining(gameTime)
        setText('')
        inputRef.current.disabled = false;
        inputRef.current.focus()
    }


    function handleChange(e) {
        setText(e.target.value)
    }


    function calculateWordCount(text) {
        const wordsArr = text.trim().split(' ');
        const wordsFiletered = wordsArr.filter(v=>v !== '');
        const wordCount = wordsFiletered.length;
        return wordCount;
    }

    return {inputRef, gameRunning, text, handleChange, timeRemaining, handleStartClick, wordCount}

}

export default useWordGame