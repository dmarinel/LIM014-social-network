import {
  createUser,
  upDateUser,
  uploadFileUserImg,
} from '../lib/user/userService.js';

export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.innerHTML = `
  <section class="container container-signUp"> 
  <h1>Sign Up</h1>
    <section class="signInUp-input signUp-input">
      <label>Full Name</label>
      <input type="text" id="signUpFullname" placeholder="Enter your Name" required />
      <label>Email</label>
      <input type="email" id="signUpEmail" placeholder="name@example.com" />
      <label>Password</label>
      <input type="password" id="signUpPassword" placeholder="Enter your Password" />
      <label>Confirm Password</label>
      <input type="password" id="floatingPassword" placeholder="Confirm Password" />
      <label>Chosse your photo</label>
      <span>
      <input type="file" id="signUpPhoto" aria-describedby="inputGroupPrepend" require />

    </section>

    <button class="buttonAllLogin" id="buttonRegister"  >REGISTER</button>
    <section class="signIn-dontAccount">
      <span>Have an Account?</span>
      <span><a id="buttonSignIn" class="signInUp-buttonSignInUp" href="" > <b>Sign In</b> </a></span>
    </section>
  </section>





  `;

  const signUpEmail = viewSignUp.querySelector('#signUpEmail');
  const signUpPassword = viewSignUp.querySelector('#signUpPassword');
  const signUpFullname = viewSignUp.querySelector('#signUpFullname');
  const buttonRegister = viewSignUp.querySelector('#buttonRegister');
  const signUpPhoto = viewSignUp.querySelector('#signUpPhoto');
  console.log(signUpPhoto);

  buttonRegister.addEventListener('click', () => {
    // e.preventDefault();
    console.log('hola user');
    createUser(signUpEmail.value, signUpPassword.value)
      .then(() => {
        uploadFileUserImg(signUpPhoto.files[0]).then((urlImg) => {
          upDateUser(signUpFullname.value, urlImg);
        });

        window.location.hash = '#/Home';
      })
      .catch((error) => {
        console.log('hola error');
        console.log(error.message);
        window.location.hash = '#/Register';
      });
  });

  return viewSignUp;
};
