export const createPost = (uid, displayName, saveInformation, img, comment) => {
  const db = firebase.firestore();
  return db.collection('posts').add({
    id: uid,
    user: displayName,
    posting: saveInformation,
    date: new Date().toLocaleString(),
    image: img,
    likes: [],

  });
};

export const getPost = (callback) => {
  const db = firebase.firestore();
  // return db.collection('posts').get();
  db.collection('posts')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      // console.log(querySnapshot);
      const post = [];
      querySnapshot.forEach((doc) => {
      // console.log('id del docuemento: ', doc.id);
      // console.log('El objeto con todas las propiedades: ', doc.data());
      // console.log('id del usuario: ', doc.data().id);
        post.push({
          postUs: doc.data().posting,
          idPost: doc.id,
          img: doc.data().image,
          likes: doc.data().likes,

        });
        console.log(post);
        callback(post);
      });
      // console.log(post);
      callback(post);
    });
};

export const deletePost = (id) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(id).delete();
};

export const getPostById = (id) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(id).get();
};

export const updatePost = (id, updatedPost) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(id).update(updatedPost);
};

export const createUrlImgPost = (file) => {
  console.log(file);
  const storageRef = firebase.storage().ref();
  const metadata = {
    contentType: 'image/jpeg',
  };
  const uploadImg = storageRef
    .child(`imgPost/${file.name}`)
    .put(file, metadata)
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((downloadURL) => downloadURL)
    .catch((error) => console.log(error));
  return uploadImg;
};

// Updating likes
export const likingPost = (id, likeUser) => {
  firebase.firestore().collection('posts').doc(id)
    .update({
      likes: likeUser,
    })
    .then(() => {
      console.log('Document successfully liked!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

// ------Comment--------

// Creating Post

export const creatingComment = (uid, idPost, comment) => {
  firebase.firestore().collection('Comments').doc(idPost).set({
    userId: uid,
    comment,
  });
};
