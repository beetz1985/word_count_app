import React from "react";

function App() {

    const [text, setText] = React.useState('');

    function handleChange(e) {
        setText(e.target.value)
    }

    function calculateWordCount(text) {


        const wordsArr = text.trim().split(' ');
        const wordsFiletered = wordsArr.filter(v=>v !== '');
        const wordCount = wordsFiletered.length;
        console.log(wordsFiletered)
    }

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange} />
            <h4>Time Remaining</h4>
            <button onClick={()=>calculateWordCount(text)}>Start</button>
            <h1>Word Count</h1>
        </div>
    )
}

export default App