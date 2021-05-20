/* //------Comment--------

//Creating Post

export const creatingComment = (uid, idPost, comment) => {
    firebase.firestore().collection('Comments').doc(idPost).set({
      userId: uid,
      comment: comment
    });
  };
  
// */