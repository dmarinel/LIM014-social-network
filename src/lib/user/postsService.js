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

export const getPost = () => {
  const db = firebase.firestore();
  return db.collection('posts').get();
};

// --------FIRESTORE---------------

// var db = firebase.firestore();
// function guardar() {
//   var saveInformation = document.getElementById('formPost').value;

//   db.collection("users").add({
//     posting: saveInformation
//   })
//   .then((docRef) => {

//     consoe.log("Document written with ID: ", docRef.id);
//     document.getElementById('formPost').value = '';
//   })
//   .catch((error) => {
//     console.error("Error adding document: ", error);
//   });

// }

// const divSeccion = document.getElementById('boxPostShare');
// db.collection('users').onSnapshot((querySnapshot) => {
//   divSeccion.innerHTML = '';
//   querySnapshot.forEach((document) => {
//     console.log(`${document.id} => ${document.data().posting}`);
//     divSeccion.innerHTML += `
//       <div id="boxPostShare">
//         <form action="">
//           <textarea id="formPostShare" spellcheck = "false" required>${document.data().posting}</textarea>
//         </form>
//       </div>`;
//   });
// });

// Leer documentos

/* const divSeccion = document.getElementById('boxPostShare')
db.collection("users").get().then((querySnapshot) => {
  divSeccion.innerHTML = '';
  querySnapshot.forEach((document) => {
      console.log(`${document.id} => ${document.data().posting}`);
      divSeccion.innerHTML += `
      <div id="boxPostShare">
        <form action="">
          <textarea id="formPostShare" spellcheck = "false" required>${document.data().posting}</textarea>
        </form>
      </div>`

  });
}); */
