import React, { useRef } from 'react';
import './removeexam-style.scss'
import database from '../../utils/database';

function RemoveExam() {

    const inputRef = useRef()

    function remove() {
        const title = inputRef.current.value
        if(title === "") return 

        database
        .removeExam(title)
        .then(res => {
            alert("deleted")
            inputRef.current.value = ""
        })
        .catch(err => console.log(err))
    }

    return (
        <div id='exam-rm-container'>
            <div id='title'>
                <h6>Remove Exam</h6>
            </div>

            <div id='m-content'>
                <input type="text" id='exam-title' ref={inputRef}/>
                <h5 onClick={remove}>Remove</h5>
            </div>
        </div>
    );
}

export default RemoveExam;