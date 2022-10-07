import React, { useContext, useEffect, useState } from 'react';
import './mcq-style.scss'

function MCQform({setOptions, setAnswer}) {


    const [f, setF] = useState("");
    const [s, setS] = useState("");
    const [t, setT] = useState("");
    const [ft, setFt] = useState("");

    useEffect(()=>{
        let arr = [];
        arr[0] = f;
        arr[1] = s;
        arr[2] = t;
        arr[3] = ft;
        setOptions(() => arr)    
    },[f,s,t,ft])

    return (
        <div id='mcq-form-container'>
            
            <div className='input-mcq-options'>
                <h6>1. <input type="text" placeholder='Enter an Choice' onChange={event => setF(()=>event.target.value)} /></h6>
                <h6>2. <input type="text" placeholder='Enter an Choice' onChange={event => setS(()=>event.target.value)}/></h6>
                <h6>3. <input type="text" placeholder='Enter an Choice' onChange={event => setT(()=>event.target.value)}/></h6>
                <h6>4. <input type="text" placeholder='Enter an Choice' onChange={event => setFt(()=>event.target.value)}/></h6>
                <h6>ans <input type="text" placeholder='Enter Correct ans.' onChange={event => setAnswer(()=>event.target.value)}/></h6>
            </div>

        </div>
    );
}

export default MCQform;