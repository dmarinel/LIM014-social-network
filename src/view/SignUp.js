import { createUser } from '../lib/user/userService.js';

export default () => {
  const viewSignUp = document.createElement('form');
  viewSignUp.innerHTML = `
    
    <div class="col-md-4">
      <label for="validationCustom01F">Full Name</label>
      <input
        type="text"
        id="signUpFullname"
        value="Mark"
        required
      />
    </div>
    <div >
      <label for="floatingInput">Email address</label>
      <input
        type="email"
        id="signUpEmail"
        placeholder="name@example.com"
      />
    </div>
    <div >
      <label for="floatingPassword">Password</label>
      <input 
        type="password" 
        id="signUpPassword" 
        placeholder="Password" 
      />
    </div>
    <div >
      <label for="floatingPassword">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        id="singUpConfirmPassword"
        placeholder="Password"
      />
    </div>
    <div >
    <label for="validationCustomUsername" 
      >Chosse your photo</label
    >
    <span >
      <input
        type="file"
        id="signUpPhoto"
        aria-describedby="inputGroupPrepend"
        required
      />
    </span>
  </div>
    <div >
      <div class="form-check">
        <input
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <label for="invalidCheck">
          Agree to terms and conditions
        </label>
        <div>
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div >
      <a id="buttonRegister" href="#/Home"
        >REGISTER</a
      >
    </div>
    <div >
      <a id="buttonSignIn" > Sign in </a>
    </div>
  
    `;

  const signUpEmail = viewSignUp.querySelector('#signUpEmail');
  const signUpPassword = viewSignUp.querySelector('#signUpPassword');
  const signUpFullname = viewSignUp.querySelector('#signUpFullname');
  const buttonRegister = viewSignUp.querySelector('#buttonRegister');
  const signUpPhoto = viewSignUp.querySelector('#signUpPhoto');

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('hola user');
    createUser(
      signUpFullname.value,
      signUpEmail.value,
      signUpPassword.value,
      signUpPhoto.value,
    );
  });

  return viewSignUp;
};
