import { createUser,upDateUser, uploadFileUser } from '../lib/user/userService.js';

export default () => {

  const viewSignUp = document.createElement('div');
  viewSignUp.innerHTML = `
    
  <div class="col-md-4">
    <label for="validationCustom01"   class="form-label">Full Name</label>
    <input
    type="text"
    class="form-control"
    id="signUpFullname"
    value="Mark"
    required
    />
    
</div>
<div class="col-md-4">
  <label for="validationCustomUsername" class="form-label"
    >Username</label
  >
  <span class="input-group has-validation">
    <span class="input-group-text" id="inputGroupPrepend">@</span>
    <input
      type="text"
      class="form-control"
      id="validationCustomUsername"
      aria-describedby="inputGroupPrepend"
      required
    />
    <!-- <div class="invalid-feedback">Please choose a username.</div> -->
  </span>
</div>
<div class="form-floating">
  <label for="floatingInput">Email address</label>
  <input
    type="email"
    id="signUpEmail"
    placeholder="name@example.com"
  />
</div>
<div class="form-floating">
  <label for="floatingPassword">Password</label>
  <input
    type="password"
    id="signUpPassword"
    placeholder="Password"
  />
</div>
<div class="form-floating">
  <label for="floatingPassword">Confirm Password</label>
  <input
    type="password"
    class="form-control"
    id="floatingPassword"
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
<div class="col-12">
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="invalidCheck"
      required
    />
    <label class="form-check-label" for="invalidCheck">
      Agree to terms and conditions
    </label>
    <div class="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>
</div>
<div class="col-12">
  <button class="btn btn-primary" id="buttonRegister"  >REGISTER</button>
</div>
<div class="col-12">
  <a id="buttonSignIn" class="btn btn-primary" href="">
    Sign in
  </a>
</div>`;

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
      .then((data) => {
        console.log(data);
        upDateUser(signUpFullname.value, signUpPhoto.value);
        console.log(signUpPhoto.files[0]);
        // uploadFileUser(signUpPhoto.files[0], signUpFullname.value);
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
