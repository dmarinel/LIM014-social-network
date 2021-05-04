// aqui exportaras las funciones que necesites

// export const createUser = (fullName, email, password, photo) => new Promise((resolve, reject) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => firebase.auth().currentUser)
//     .then((currentUser) => {
//       console.log('hola ya me creo');
//       console.log(currentUser);
//       currentUser.updateProfile({
//         displayName: fullName,
//         photoURL: photo,
//       });
//       resolve(true);
//     })
//     .catch((error) => reject(new Error(error)));
// });

export const createUser = (email, password) => {
  const user = firebase.auth();
  // const create = user
  return user.createUserWithEmailAndPassword(email, password);
};

export const upDateUser = (displayName, photoURL) => {
  const user = firebase.auth().currentUser;
  return user.updateProfile({ displayName, photoURL });
};

export const uploadFileUser = (file) => {
  // Create a root reference
  const storageRef = firebase.storage().ref();
//  console.log(file.files[0]);
  const metadata = {
    contentType: 'image/jpeg',
  };

  // Upload the file and metadata
  const uploadTask = storageRef
    .child(`imgUser/${file.name}`)
    .put(file, metadata)
    .then((snapshot) => {
      console.log(snapshot);
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    })
    .catch((error) => console.log(error));
};

// ************************** SIGN IN

export const signIn = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// Sign in with google
export const signInGoogle = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};
