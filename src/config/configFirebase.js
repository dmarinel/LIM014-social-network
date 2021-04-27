import firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyBW8kZyh92acTLabbh5uHVkqORBpaBPBL8',
  authDomain: 'funkook-85045.firebaseapp.com',
  projectId: 'funkook-85045',
  storageBucket: 'funkook-85045.appspot.com',
  messagingSenderId: '704876153060',
  appId: '1:704876153060:web:af2b02e6ea8d09597a84f1',
  measurementId: 'G-NLKW0NCBYR',

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);