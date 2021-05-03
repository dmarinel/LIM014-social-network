import * from './config/configFirebase.js';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

console.log(`holaaaaaaa`)
const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
.then((userCredencial)=>{
    console.log(userCredencial)
})
.catch()





