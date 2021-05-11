import { getPost, deletePost } from '../lib/user/postsService.js';
import { renderModalPost } from './ModalPost.js';

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
            <p id="formPostShare" spellcheck = "false" required>${doc.postUs}</p>
            <button class="btnPostEdit" data-id=${doc.idPost} >edit</button>
            <button class="btnPostDelete" data-id=${doc.idPost}>delete</button>
            `;
      postUser.appendChild(postUnique);
    });
    postUser.querySelectorAll('.btnPostDelete').forEach((btnPostDelete) => btnPostDelete.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      deletePost(idPost).then(() => console.log('elemento eliminado'));
    }));

    postUser.querySelectorAll('.btnPostEdit').forEach((btnPostEdit) => btnPostEdit.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      renderModalPost(element, idPost);
    }));

    console.log(postUser);

    element.appendChild(postUser);
  });
};