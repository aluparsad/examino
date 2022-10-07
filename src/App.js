import { useEffect, useState } from 'react';
import './App.scss';
import LeftNavbar from './components/Left-Scetion-Bar/LeftNavbar';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Account from './components/Account/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserContext from './utils/UserContext'
import auth from './utils/auth';
import database from './utils/database';

function App() {

  const [user, setUser] = useState(null);

  function getUseraObj(usr){
    return {
      username:usr.displayName,
      uid:usr.uid,
      email:usr.email,
      type:"TEACHER"
    }
  }

  useEffect(()=>{
    auth.userListener(change => {
      database.createUser(getUseraObj(change))
      .then(usr => {
        setUser(usr.data)
        console.log(usr.data)
      })
      .catch(err => console.log(err))
    })
  }, [])

  return (

    <div className="App">
      <UserContext.Provider value={user} >

        <Navbar user={user} setUser={setUser} />

        <LeftNavbar />

        <Router>

          <Routes>
            
            <Route exact path='/' element={<Home user={user} />} />

            {/* <Route exact path='/about' element={<About />} > </Route> */}
            
            <Route exact path='/account' element={<Account user={user} setUser={setUser}/>} />
          
          </Routes>

        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
