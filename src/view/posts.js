import {
  getPost, deletePost, getPostById, updatePost,
} from '../lib/user/postsService.js';
import { renderModalPost } from './ModalPost.js';

export const renderPostUser = (element) => {
  const postUser = document.createElement('section');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'myModal');

  getPost((postUser1) => {
    // console.log(postUser1);
    postUser.innerHTML = '';
    postUser1.forEach((doc) => {
      // console.log(doc.postUs);
      // console.log(doc.idPost);
      const postUnique = document.createElement('article');
      postUnique.classList.add('postsAllUsers');
      postUnique.innerHTML = `
      
            <div class="userInformation">
              <section >
                <img class="photoProfile" src="img/googleIcon.png" width="26" height="26"/>
                <span>Denisse Montalvo</span>
              </section>
              <div class="editByOwner">
                <img src="img/editButton.PNG" width="20" height="20" class="btnPostEdit" data-id=${doc.idPost}></img>
                <img src="img/deleteButton.PNG" width="20" height="20" class="btnPostDelete" data-id=${doc.idPost}></img>
            </div>
            </div>
            <p id="formPostShare" class="formPostShare" spellcheck = "false" required>${doc.postUs}</p>
            <img  >
            <div class="likesAndComments">
              <p>3 likes</p>
              <p>4 comments</p>
            </div>
            <div class="buttonLikeComment">
            <img src="img/likeButton.PNG" width="18.6" height="18" class="buttonLikePost" id="buttonLikePost"/>
            <button class="buttonCommentPost">Comment</button>
            </div>

            `;
      postUser.appendChild(postUnique);
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

    // console.log(postUser);

    element.appendChild(postUser);
  });
};
