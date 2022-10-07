import React, { useState, useEffect } from 'react';
import db from '../../utils/database';
import Question from './Question/Question';
import './test-style.scss'
import TestList from './TestList/TestList';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Test({uid}) {
    
    const [test, setTest] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [tests, setTests] = useState([]);

    useEffect(()=>{
        db.getExams()
        .then(res => {
            setTests(() => res.data)
        })
        .catch(er => console.log(er))
    },[])

    function saveTest(){
        db
        .submitTest({
                "tid": test._id,
                "uid": uid,
                "answers": answers
        })
        .then(res => {
            console.log('res', res)
            alert('submited')
        })
        .catch(err => console.log('err', err))
    }


    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(test.questions)
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        let res = { ...test };
        res.questions = items;
        setTest(() => res)
    }

    return (
        <div id='test'>

                Tests List
            
            <TestList tests={tests} setTest={setTest} />

            <h1>{test && test.title}</h1>

            <DragDropContext onDragEnd={handleOnDragEnd} >
                <Droppable droppableId='questions'>
                    {(provided) => (

                        <ul id="questions-container" {...provided.droppableProps} ref={provided.innerRef}>

                            {test && test.questions.map((que, index) => (

                                <Draggable index={index} draggableId={que.qid} key={que.qid}>

                                    {provdd => (<li {...provdd.draggableProps} {...provdd.dragHandleProps} ref={provdd.innerRef}>
                                        <Question question={que} id={que.qid} setAnswers={setAnswers} />
                                        </li>)}

                                </Draggable>)
                            )}
                            {provided.placeholder}
                        </ul>
                    )
                    }
                </Droppable>
            </DragDropContext>

            <h5 onClick={saveTest}>Save</h5>
        </div>
    );
}

export default Test;