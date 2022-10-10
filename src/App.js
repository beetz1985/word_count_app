import React, { useEffect } from "react";

function App() {

    const _GAME_TIME = 10;

    const [text, setText] = React.useState('');
    const [timeRemaining, setTimeRemaining] = React.useState(_GAME_TIME)
    const [gameRunning, setGameRunning] = React.useState(false)
    const [wordCount, setWordCount] = React.useState(0)
    

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
        setTimeRemaining(_GAME_TIME)
        setText('')
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



    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea disabled={!gameRunning} value={text} onChange={handleChange} />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button disabled={gameRunning} onClick={handleStartClick}>Start</button>
            <h1>{wordCount}</h1>
        </div>
    )
}

export default App