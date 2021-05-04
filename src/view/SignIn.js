import { signIn, signInGoogle } from '../lib/user/userService.js';

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

  const btnGoogle = viewSignIn.querySelector('#buttonLoginGoogle');

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then((result) => {
        console.log(result);
        console.log('hola');
        window.location.hash = '#/Home';
      })
      .catch((err) => {
        console.log(err);
        window.location.hash = '';
      });
  });

  return viewSignIn;
};
