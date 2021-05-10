import { getPost, deletePost } from '../lib/user/postsService.js';

export const renderPostUser = (element) => {
  const postUser = document.createElement('div');

  getPost((postUser1) => {
    // console.log(postUser1);
    postUser.innerHTML = ''
    postUser1.forEach((doc) => {
      // postUser.innerHTML = '';
      console.log(doc.postUs);
      // console.log(doc.idPost);
      const postUnique = document.createElement('div');
      postUnique.innerHTML = `
            <textarea id="formPostShare" spellcheck = "false" required>${doc.postUs}</textarea>
            <button class="btnPostEdit"  >edit</button>
            <button class="btnPostDelete" data-id=${doc.idPost}>delete</button>
            `;
      postUser.appendChild(postUnique);
    });
    postUser.querySelectorAll('.btnPostDelete').forEach((formPostDelete) => formPostDelete.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      console.log(e.target.tagName);
      console.log(e.target.parentElement);
      console.log(e.target.dataset.id);
      console.log('me borro');
      deletePost(idPost).then(() => console.log('elemento eliminado'));
    }));

    postUser.querySelectorAll('#btnPostEdit').forEach((formPostEdit) => formPostEdit.addEventListener('click', () => console.log('me edito')));

    console.log(postUser);

    element.appendChild(postUser);
  });
};
