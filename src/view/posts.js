import { getPost } from '../lib/user/postsService.js';

export const renderPostUser = () => {
  const postUser = document.createElement('div');

  return getPost((postUser1) => {
    // console.log(postUser1);
    postUser1.forEach((doc) => {
      // postUser.innerHTML = '';
      const postUnique = document.createElement('div');
      postUnique.innerHTML = `
            <textarea id="formPostShare" spellcheck = "false" required>${doc.postUs}</textarea>
            `;
      postUser.appendChild(postUnique);
    });
    console.log(postUser);
    return postUser;
  });
};
