export const createPost = (uid, displayName, saveInformation) => {
  const db = firebase.firestore();
  return db.collection('posts').add({
    id: uid,
    user: displayName,
    posting: saveInformation,
    date: new Date().toLocaleString(),
    image: 'image',
    likes: '1',
  });
};

export const getPost = (callback) => {
  const db = firebase.firestore();
  // return db.collection('posts').get();
  db.collection('posts')
    .orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    // console.log(querySnapshot);
      const post = [];
      querySnapshot.forEach((doc) => {
      // console.log(doc.id);
        post.push({
          postUs: doc.data().posting,
          idPost: doc.id,
        });
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
