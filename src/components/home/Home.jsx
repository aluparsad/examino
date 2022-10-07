import React from 'react';
import MakeTest from '../makeTest/MakeTest'
import Test from '../Test/Test';


function Home({user}) {

    return (
        <div>
            {user ?
                ((user.type === "TEACHER") ? <MakeTest uid={user.uid} /> : <Test uid={user.uid} />) :
                (<h1 style={{ position: 'relative', alignSelf: 'center', top: '30vh', left: '30vw', fontSize: 'calc((1vw + 1vh) * (3/2))' }}>
                    Login To Continue..</h1>
                )
            }
        </div>
    );
}

export default Home;