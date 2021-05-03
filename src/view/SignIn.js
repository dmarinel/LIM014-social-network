import { signIn, signInGoogle} from '../lib/user/userService.js';

export default () => {
  const viewSignIn = document.createElement('div');
  viewSignIn.innerHTML = `
    <main id="formSignInUp">
    <!-- S I G N  I N  F O R M -->
    <form class="" id="userSignInForm"  >
      <img
        class=""
        src=""
        width="72"
        height="57"
      />
      <h1 class="">Please sign in</h1>
      <div class="">
        <label>Email address</label>
        <input
          type="email"
          id="signInEmail"
          placeholder="name@example.com"
        />
      </div>
      <div class="">
        <label >Password</label>
        <input
          type="password"
          id="signInPassword"
          placeholder="Password"
        />
      </div>
      <a class = "recoverPass" href="#/RecoverPassword">Did you forget your password?</a>
      <a id="buttonLogin" class="" href="#/Home" > Login </a>
      <p id = "errorMessage" class = "errorMessage"></p>
      <!-- <button id="buttonLoginFacebook" class=""  >
        Facebook
      </button> -->
      <button id= "buttonLoginGoogle" class="" >
        Google
      </button>
      <a id="buttonSignUp" class =" " href="#/Register" > Sign Up </a>
      <p class="">&copy; 2017–2021</p>
    </form>`;
  console.log('hola mundo  ');


  // const userSignInForm = viewSignIn.getElementById('userSignInForm');
  // userSignInForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const signInEmail = viewSignIn.getElementById('signInEmail').value;
  //   const signInPassword = viewSignIn.getElementById('signInPassword').value;
  //   const error = viewSignIn.getElementById('error-message');
  //   signIn(signInEmail, signInPassword)
  //     .then((userCredential) => {

  //       console.log(data);
  //     });
  // });

  // const btnGoogle = viewSignIn.getElementById('buttonLoginGoogle');
  // btnGoogle.addEventListener('click', () => {
  //   signInGoogle()
  //     .then(() => {
  //       getDataUser(currentUser().uid)
  //         .then((doc) => {
  //           if (doc.exists) {
  //             window.location.hash = '#/home';
  //           } else {
  //             sendDataCurrentUser(currentUser())
  //               .then(() => {
  //                 window.location.hash = '#/home';
  //               });
  //           }
  //         });
  //     });
  // });







  return viewSignIn;
};
