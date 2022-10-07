import React, { useContext, useEffect, useRef, useState } from 'react';
import './questionform.scss'
import MCQform from './mcq/MCQform';
import Wordform from './wordform/Wordform';
import { v4 } from 'uuid';


function QuestionForm({ examContext }) {

    const { setQuestions} = useContext(examContext);

    const [type, setType] = useState("MCQ")
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState('');
    const [points, setPoints] = useState();
    const [question, setQuestion] = useState('');


    function save() {

        if(type==="MCQ"){
            setQuestions((ques) => [...ques, {
                qid:v4(),
                type: type,
                points: points,
                question: question,
                answer: answer,
                options: options
            }])
        }

        else{
            setQuestions((ques) => [...ques, {
                qid:v4(),
                type: type,
                points: points,
                question: question,
                answer: answer
            }])
        }

        

    }

    

    return (
        <div id='form-question-container'>
            
            <div id="form-container">
                <div className="heading">

                    <h3>Question</h3>

                    <div className="type-container">

                        <label htmlFor="question-type">Type: </label>

                        <select name="question-type" id="question-type" onChange={event => setType(event.target.value)}>
                            <option value={"MCQ"}>MCQ</option>
                            <option value={"SENTENCE"}>SENTENCE</option>
                        </select>
                    </div>

                    <div >
                        <label htmlFor="points">Pts: </label>
                        <input type="number" name="points" id="input-pts" onChange={(event) => setPoints(()=> event.target.value)} />
                    </div>
                </div>

                
        

                <div className="question-input-container">
                    <label htmlFor="question-input"> Question: </label>
                    <input type="text" id="question-input" placeholder='Enter Question text' onChange={event => setQuestion(event.target.value)}/>
                </div>
               

                <div className='form-container'>
                    {
                        type === "MCQ" ? <MCQform setOptions={setOptions} setAnswer={setAnswer} /> : <Wordform setAnswer={setAnswer} />
                    }
                </div>

                <h5 className='btn-save-test' onClick={save}>Save</h5>
            </div>
        </div>
    );
}

export default QuestionForm;