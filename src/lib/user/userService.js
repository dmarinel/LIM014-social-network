// aqui exportaras las funciones que necesites

export const createUser = (fullName, email, password) =>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredencial)=>{
      console.log(`hola ya me creo`);
      console.log(userCredencial.user);
    })
    .catch((error)=>{
      console.log(error.code);
    })
  }
  