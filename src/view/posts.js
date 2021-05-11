import { getPost, deletePost } from '../lib/user/postsService.js';

export const renderPostUser = (element) => {
  const postUser = document.createElement('section');

  getPost((postUser1) => {
    // console.log(postUser1);
    postUser.innerHTML = '';
    postUser1.forEach((doc) => {
      // postUser.innerHTML = '';
      // console.log(doc.postUs);
      // console.log(doc.idPost);
      const postUnique = document.createElement('article');
      postUnique.classList.add('postsAllUsers');
      postUnique.innerHTML = `
            <div class="userInformation">
              <section>
                <img class="photoProfile" src="img/googleIcon.png" width="26" height="26"/>
                <span>Denisse Montalvo</span>
              </section>
              <div class="editByOwner">
                <img src="img/editButton.PNG" width="20" height="20" class="btnPostEdit"></img>
                <img src="img/deleteButton.PNG" width="20" height="20" class="btnPostDelete" data-id=${doc.idPost}></img>
            </div>
            </div>
            <p id="formPostShare" spellcheck = "false" required>${doc.postUs}</p>
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

    postUser.querySelectorAll('.btnPostDelete').forEach((formPostDelete) => formPostDelete.addEventListener('click', (e) => {
      const idPost = e.target.dataset.id;
      console.log(e.target.tagName);
      console.log(e.target.parentElement);
      console.log(e.target.dataset.id);
      console.log('me borro');
      deletePost(idPost).then(() => console.log('elemento eliminado'));
    }));

    postUser.querySelectorAll('.btnPostEdit').forEach((formPostEdit) => formPostEdit.addEventListener('click', () => {
      console.log('me edito');
    }));

    // console.log(postUser);

    element.appendChild(postUser);
  });
};
