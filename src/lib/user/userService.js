// aqui exportaras las funciones que necesites

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
    contentType: "image/jpeg",
  };

  // Upload the file and metadata
  const uploadTask = storageRef
    .child(`imgUser/${file.name}`)
    .put(file, metadata)
    .then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => downloadURL);
    })
    .catch((error) => console.log(error));
};
