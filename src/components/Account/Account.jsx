import React, { useState, useContext, useEffect } from 'react';
import db from '../../utils/database'
import './style-account.scss'
import database from '../../utils/database';


function Account({ user, setUser }) {

    // useEffect(()=>{
    //     database.getUser(user.email).then(res=>setUser(res)).catch(err => console.log(err))
    // },[user])

    const [type, setType] = useState("TEACHER");

    function save(){
        db.updateUserType(user.uid, type)
        
        .then(res => {
            db.getUser(user.email)
            .then(usr => {
                setUser(() => usr)
                alert('Saved!')
            })
            .catch(err => console.log(err))
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div id='info-acnt-container'>

            <div>
                <h6>uid : </h6>
                <h6>{user?.uid}</h6>
            </div>
            <div>
                <h6>name : </h6>
                <h6>{user?.username}</h6>
            </div>
            <div>
                <h6>email : </h6>
                <h6>{user?.email}</h6>
            </div>
            <div>
                <h6>Type : </h6>
                <select name="account-type" id="account-type" onChange={event => setType(event.target.value)}>
                    <option value={"TEACHER"} defaultValue>TEACHER</option>
                    <option value={"STUDENT"}>STUDENT</option>
                </select>
            </div>

            <h5 onClick={save}>SAVE</h5>
        </div>
    );
}

export default Account;