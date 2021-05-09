import { signIn, signInGoogle } from '../lib/user/userService.js';

export default () => {
  const viewSignIn = document.createElement('div');
  viewSignIn.innerHTML = `

    <section class="container container-signIn" >
      <figure class="signIn-images">
        <img src="img/logo.png" width="118" height="95"  alt="logo">
        <img src="img/funkOok.png" width="136" height="50"  alt="">
      </figure>
      <section class="signInUp-input signIn-input">
        <label>Email</label>
        <input type="email" id="signInEmail" placeholder="name@example.com" />
        <label >Password</label>
        <input type="password" id="signInPassword" placeholder="*********"/>
      </section>
      <!-- <a class = "recoverPass" href="#/RecoverPassword">Did you forget your password?</a> -->
      
      <button id="buttonLogin" class="buttonAllLogin" > Login </button>
      
      <section class="signIn-google">
        <p class="">-OR-</p>
        <p class=""> <b>Sign in with</b></p>
        <img src="img/googleIcon.png" width="39" height="40" class="button-google" id=   "buttonLoginGoogle"/>
      </section>
      <section class="signIn-dontAccount">
        <span>Don't have an Account?</span>
        <span><a id="buttonSignUp" class ="signInUp-buttonSignInUp" href="#/Register" > <b>Sign Up</b> </a></span>
      </section>

    </section>`;
  console.log('hola mundo  ');

  const btnLogin = viewSignIn.querySelector('#buttonLogin');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#signInEmail').value;
    const password = document.querySelector('#signInPassword').value;
    signIn(email, password)
      .then((userCredential) => {
        // document.querySelector('#userSignInForm').reset();
        window.location.hash = '#/Home';
      })
      .catch((err) => {
        console.log(err);
        window.location.hash = '';
      });
  });

  const btnGoogle = viewSignIn.querySelector('#buttonLoginGoogle');

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInGoogle()
      .then((result) => {
        console.log(result);
        console.log('hola');
        const user = result.user;
        console.log(user);
        window.location.hash = '#/Home';
      })
      .catch((err) => {
        console.log(err);
        window.location.hash = '';
      });
  });

  return viewSignIn;
};
