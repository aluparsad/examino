import React, { useState } from 'react';
import './mcq-style.scss'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function MCQ({ id, options, setAnswers }) {

    const [choices, setChoices] = useState(options);
    const [choice , setChoice] = useState(null);

    const saveAnswer = () => {
        setAnswers((ansrs)=> [...ansrs, {id:choice}]);
    }


    function handleOnDragEnd (result){
        if(!result.destination) return;

        const items = Array.from(choices)
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setChoices(() => items)
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd} >
            <Droppable droppableId='options'>
                {(provided) => (
                    <div className='mcq-select-container' {...provided.droppableProps} ref={provided.innerRef}>

                        {options.map((option, index) =>
                            <Draggable index={index} draggableId={index+''} key={index}>
                                {(provdd) => <div {...provdd.draggableProps} {...provdd.dragHandleProps} ref={provdd.innerRef} className='input-radio' key={index}> <input onChange={event => setChoice(event.target.value)} type="radio" name={id} value={option} /> {option}</div>}
                            </Draggable>
                        )}
                            {provided.placeholder}

                        <div className='save-btn-container'>
                            <h4 onClick={saveAnswer}>Save</h4>
                        </div>
                    </div>
                )}

            </Droppable>
        </DragDropContext>

    );
}

export default MCQ;