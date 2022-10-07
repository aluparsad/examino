import React from 'react';
import './testlist-style.scss'

function TestList({tests, setTest}) {
    return (
        <div id='search-exam'>
            {
                tests.map((tes, index) => (
                    <div key={index}>
                        <h5 className='test' onClick={() => setTest(() => tes)}>{tes.title}</h5>
                    </div>)
                )
            }
        </div>
    );
}

export default TestList;