import React,{useRef, useState} from 'react';
import './sentence-style.scss'

function Sentence({ id, setAnswers }) {
    
    const ansRef = useRef();

    const save = async () => {
        setAnswers((ansrs)=> [...ansrs, {id:ansRef.current.value}]);
    }

    return (
        <div id="sentence-container">
            
            <div className="input-container">
                <label htmlFor="answer">Answer:</label>
                <input type="text" name="answer" enterKeyHint='Enter Answer' className='answer-input' ref={ansRef} />
            </div>
            <div className='save-btn-container'>
                <h4 onClick={save}>Save</h4>
            </div>
        </div>
    );
}

export default Sentence;