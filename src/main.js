// Este es el punto de entrada de tu aplicacion

// import { auth } from './lib/index';

// button sign up (Register Form)
// const buttonSignUp = document.getElementById('buttonSignUp');
const auth = firebase.auth();
const fs = firebase.firestore();
// user Login form
const userSignInForm = document.getElementById('userSignInForm');
// userRegisterForm
const userRegisterForm = document.getElementById('userRegisterForm');

// const buttonSignIn = document.getElementById('buttonSignIn');

// Button REGISTER
const buttonRegister = document.getElementById('buttonRegister');

const buttonLogOut = document.getElementById('buttonLogOut');

// H O M E
const homeRedSocial = document.getElementById('homeRedSocial');

const buttonSignUp = document.getElementById('buttonSignUp');

const buttonSignIn = document.getElementById('buttonSignIn');

const buttonLogin = document.getElementById('buttonLogin');

// posts
const posts = document.getElementById('posts');
const setupPosts = (data) => {
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const li = `
            <li class="listGroupItem listGroupItemAccion">
            <h5>${doc.title}</h5>
            <p>${doc.description}</p>
            </li>
            `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<p>Login to see</p>';
  }
};


function userFormFunction() {
  userSignInForm.classList.add('hide');
  userRegisterForm.classList.remove('hide');
}
buttonSignUp.addEventListener('click', userFormFunction);


function userSignInFunction() {
  userSignInForm.classList.remove('hide');
  userRegisterForm.classList.add('hide');
}
buttonSignIn.addEventListener('click', userSignInFunction);

// REGISTER BUTTON
buttonRegister.addEventListener('click', (e) => {
  e.preventDefault();
  // Form EMAIL
  const signUpEmail = document.getElementById('signUpEmail').value;

  // Form password
  const signUpPassword = document.getElementById('signUpPassword').value;

  auth
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((userCredential) => {
      // clear the form
      document.getElementById('userRegisterForm').reset();
      userRegisterForm.classList.add('hide');
      homeRedSocial.classList.remove('hide');

      console.log('sign up');
    });

  console.log(':D');
});

console.log('help');

// LOGIN BUTTON
buttonLogin.addEventListener('click', (e) => {
  e.preventDefault();
  // Form EMAIL
  const signInEmail = document.getElementById('signInEmail').value;

  // Form password
  const signInPassword = document.getElementById('signInPassword').value;

  auth
    .signInWithEmailAndPassword(signInEmail, signInPassword)
    .then((userCredential) => {
      // clear the form
      document.getElementById('userSignInForm').reset();
      userSignInForm.classList.add('hide');
      homeRedSocial.classList.remove('hide');

      console.log('sign in x');
    });

  console.log(' (\\*-*//) ');
});

buttonLogOut.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('sign out');
    userSignInForm.classList.remove('hide');
    homeRedSocial.classList.add('hide');
  });

  console.log(' (\\T-T//) ');
});

// posts list
buttonLogOut.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('sign out');
    userSignInForm.classList.remove('hide');
    homeRedSocial.classList.add('hide');
  });

  console.log(' (\\T-T//) ');
});

// events
// List for auth state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    fs.collection('posts')
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
      });
    console.log('auth : sign in ♥ ');
  } else {
    console.log('auth : sign out ♪♫‼');
  }
});
