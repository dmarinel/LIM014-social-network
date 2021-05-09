import { getPost /* ,deletePost */ } from '../lib/user/postsService.js';

export const renderPostUser = (element) => {
  const postUser = document.createElement('div');

  getPost((postUser1) => {
    // console.log(postUser1);
    postUser1.forEach((doc) => {
      // postUser.innerHTML = '';
      const postUnique = document.createElement('div');
      postUnique.innerHTML = `
            <textarea id="formPostShare" spellcheck = "false" required>${doc.postUs}</textarea>
            <button id="btnPostEdit" >edit</button>
            <button id="btnPostDelete">delete</button>
            `;
      postUser.appendChild(postUnique);
    });
    postUser.querySelectorAll('#btnPostDelete').forEach((formPostDelete) => formPostDelete.addEventListener('click', (e) => {
      console.log(e.target.tagName);
      console.log(e.target.parentElement.getAttribute());
      console.log('me borro');
      //deletePost();
    }));

    postUser.querySelectorAll('#btnPostEdit').forEach((formPostEdit) => formPostEdit.addEventListener('click', () => console.log('me edito')));

    console.log(postUser);

    element.appendChild(postUser);
  });
};
