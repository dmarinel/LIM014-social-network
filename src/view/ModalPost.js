import { getPostById, updatePost } from '../lib/user/postsService.js';

export const renderModalPost = (divFather, id) => {
  getPostById(id)
    .then((infoId) => infoId.data())
    .then((data) => {
      console.log(data.posting);
      const modalEditPost = document.createElement('div');
      modalEditPost.innerHTML = `
    <div>
      <section>
        <img src="" alt="">
        <p>Nombre de usuario</p>
        <textarea id="inputPost" type="text">${data.posting}</textarea>
      </section>
      <section>
        <input type="file">
      </section>
      <button id="btnPostUpdate">Update</button>
    </div>
      `;
      modalEditPost.addEventListener('click', () => {
        const inputPost = modalEditPost.querySelector('#inputPost');
        updatePost(id, {
          posting: inputPost.value,
        });
      });
      divFather.appendChild(modalEditPost);
    });
};
