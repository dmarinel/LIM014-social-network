
import {createUser} from "../lib/user/userService.js"
const SignUp = () => {
  const formSignUp = document.createElement("form");
  formSignUp.innerHTML = `
    
    <div class="col-md-4">
      <label for="validationCustom01F">Full Name</label>
      <input
        type="text"
        id="signUpFullname"
        value="Mark"
        required
      />
    </div>
    <div class="col-md-4">
      <label for="validationCustomUsername" 
        >Username</label
      >
      <span >
        <span " id="inputGroupPrepend">@</span>
        <input
          type="text"
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend"
          required
        />
      </span>
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
      <input type="password" id="signUpPassword" placeholder="Password" />
    </div>
    <div >
      <label for="floatingPassword">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
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

    const signUpEmail = formSignUp.querySelector("#signUpEmail")
    const signUpPassword = formSignUp.querySelector("#signUpPassword")
    const signUpFullname = formSignUp.querySelector("#signUpFullname")
    const buttonRegister = formSignUp.querySelector("#buttonRegister")
    
    
    
    buttonRegister.addEventListener("click", (e)=>{
        // e.preventDefault()
        console.log(`hola user`);
        createUser(signUpFullname.value, signUpEmail.value, signUpPassword.value)
    })

  return formSignUp;
};

export default SignUp;
