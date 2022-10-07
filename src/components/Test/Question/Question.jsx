import React, { useState } from 'react';
import MCQ from '../MCQ/MCQ';
import Sentence from '../Sentence/Sentence';
import './question-style.scss'

function Question({question, id, setAnswers}) {

    const isMcq = question.type === "MCQ";

    return (
        <div className='question-contianer'>
            <h3 className='question'>Q. {question.question}</h3>
            {isMcq ? <MCQ id={id} options={question.options} setAnswers={setAnswers} /> : <Sentence id={id} setAnswers={setAnswers} />}
            </div>
    );
}

export default Question