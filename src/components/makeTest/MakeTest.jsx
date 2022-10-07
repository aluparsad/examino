import React, { useState, createContext, useRef } from 'react';
import './make-test-style.scss'
import QuestionForm from './Question.jsx/QuestionForm';
import db from '../../utils/database'

function MakeTest() {
    const examContext = createContext();

    const ExamTitle = useRef();
    const [questions, setQuestions] = useState([]);

    function saveQuiz() {

        const exam = {
            title: ExamTitle.current.value,
            questions: questions
        }

        db.createExam(exam)
            .then(res => {
                console.log(res)
                ExamTitle.current.value = ""
                setQuestions(()=>[])
            })
            .catch(err => console.log(err));
    }


    return (

        <examContext.Provider value={{questions, setQuestions }}>

            <div id='make-test-container'>
                <div className='heading'>
                    <h5 className='test-title'>Mock Test</h5>
                    <input placeholder='Enter Test Name' type='text' ref={ExamTitle} />
                    <h5 className='btn-save-test' onClick={saveQuiz}>Save</h5>

                </div>

                <div id="divider-view"> </div>

                <QuestionForm examContext={examContext} />

            </div>

        </examContext.Provider>

    );
}

export default MakeTest;