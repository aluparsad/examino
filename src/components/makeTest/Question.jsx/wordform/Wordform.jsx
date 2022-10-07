import React from 'react';
import "./word-form-style.scss"

function Wordform({setAnswer}) {

    return (
        <div id="word-form-container" >
            
            <div className="answer-input-container">
                <label htmlFor="answer-input"> Answer: </label>
                <input type="text" id="answer-input" onChange={event => setAnswer(()=>event.target.value)} />
            </div>

        </div>
    );
}

export default Wordform;