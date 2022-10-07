import React, { useEffect } from 'react';
import auth from '../../utils/auth'
import './auth.scss'
import db from '../../utils/database'

function Auth({ user, setUser }) {
        


    function getUserObj(res, type) {
        if (!type || !res) return

        return ({
            uid: res.uid,
            username: res.displayName,
            email: res.email,
            type: type
        })
    }



    const onLoggedInSuccess = (user) => {
        db
        .createUser(getUserObj(user, "TEACHER"))
        .then(usr => setUser(()=>usr))
        .catch(err => console.log(err))
    }

    const onError = (err) => {
        console.log(err)
        setUser(null)
    }

    const Login = () => {
        auth
        .login()
        .then(res => onLoggedInSuccess(res.user))
        .catch(err => onError(err))
    }

    const Logout = () => {
        auth.auth.signOut()
            .then(() => {
                setUser(() => null)
            })
    }


    return (
        <div id='auth'>
            {user ? <h6 id="btn-logout" >hi! {user.username}, <a  onClick={Logout}>Logout</a></h6> : <a id="btn-login" onClick={Login}>Login with google</a>}
        </div>
    );
}

export default Auth;