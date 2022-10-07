import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, browserSessionPersistence } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDHBoftIG5DOBYkgYn4jjFYkXYsAiA4UzY",
  authDomain: "examino-2ce70.firebaseapp.com",
  projectId: "examino-2ce70",
  storageBucket: "examino-2ce70.appspot.com",
  messagingSenderId: "18980656387",
  appId: "1:18980656387:web:9f2dedcc95169c0cb9c536",
  measurementId: "G-6RD4QGJTMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const login = async () => {
  await auth.setPersistence(browserSessionPersistence)
  const gap = new GoogleAuthProvider()
  return await signInWithPopup(auth, gap)
}

function userListener(cb){
    auth.onAuthStateChanged(cb)
}

export default { login, auth, userListener};
