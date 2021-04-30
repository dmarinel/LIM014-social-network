// aqui exportaras las funciones que necesites

export const createUser = (fullName, email, password, photo) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser)
    .then((currentUser) => {
      console.log(`hola ya me creo`);
      console.log(currentUser);
      return currentUser.updateProfile({
        displayName: fullName,
        photoURL: photo,
      });
      // .then((result)=>{
      //   console.log("Actualizando mis datos");
      //   console.log(result);
      // })
    })
    .catch((error) => {
      console.log(error);
    });
};
