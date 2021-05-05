// aqui exportaras las funciones que necesites

export const createUser = (email, password) => {
  const user = firebase.auth();
  return user.createUserWithEmailAndPassword(email, password);
};

export const upDateUser = (displayName, photoURL) => {
  const user = firebase.auth().currentUser;
  return user.updateProfile({ displayName, photoURL });
};

export const uploadFileUserImg = (file) => {
  const storageRef = firebase.storage().ref();
  const metadata = {
    contentType: 'image/jpeg',
  };

  // Upload the file and metadata
  const uploadTask = storageRef
    .child(`imgUser/${file.name}`)
    .put(file, metadata)
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((downloadURL) => downloadURL)
    .catch((error) => console.log(error));

  return uploadTask;
};
// **************************
const hearChanged = firebase.auth();
hearChanged.onAuthStateChanged((user) => {
  if (user) {
    console.log('sign in :3');
  } else {
    console.log('sign out :c');
  }
});

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

// ************************** SIGN out

export const signOut = () => firebase.auth().signOut();
