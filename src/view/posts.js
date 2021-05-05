import { getPost } from '../lib/user/postsService.js';

export const renderPostUser = () => {
  const postUser = document.createElement('div');
  return getPost()
    .then((querySnapshot) => {
      // console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().posting}`);
        // postUser.innerHTML = '';
        const postUnique = document.createElement('div');
        postUnique.innerHTML = `
            <textarea id="formPostShare" spellcheck = "false" required>${doc.data().posting}</textarea>
            `;
        postUser.appendChild(postUnique);
      });
      return postUser;
    });
};
