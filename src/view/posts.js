import {
  getPost, deletePost, getPostById, updatePost,
} from '../lib/user/postsService.js';
import { renderModalPost } from './ModalPost.js';

export const renderPostUser = (element) => {
  const postUser = document.createElement('div');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'myModal');

  getPost((postUser1) => {
    // console.log(postUser1);
    postUser.innerHTML = '';
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
      getPostById(idPost)
        .then((infoId) => infoId.data())
        .then((data) => {
          modal.innerHTML = '';
          const modalContent = renderModalPost(data);
          const btnClose = modalContent.querySelector('.close');
          const btnUpdate = modalContent.querySelector('#btnPostUpdate');
          btnClose.addEventListener('click', () => {
            console.log('hola');
            modal.style.display = 'none';
          });
          btnUpdate.addEventListener('click', () => {
            console.log('hola');
            const inputPost = modalContent.querySelector('#inputPost');
            updatePost(idPost, {
              posting: inputPost.value,
            });
            modal.style.display = 'none';
          });
          modal.appendChild(modalContent);
          element.appendChild(modal);
          modal.style.display = 'block';
        });
    }));

    console.log(postUser);

    element.appendChild(postUser);
  });
};
