import { createPost, createUrlImgPost } from '../lib/user/postsService.js';
import { hearSign } from '../lib/user/userService.js';

import { renderPostUser } from './posts.js';
// import { userCurrentUser } from '../lib/user/userService.js';

export default () => {
  const viewHome = document.createElement('section');
  viewHome.classList.add('containerHome');
  // const usernameId = firebase.auth().currentUser.uid;
  viewHome.innerHTML = `
        <aside class="userPrincipal">
          <img class="photoProfile" src="img/googleIcon.png"/>
          <div class="userAndStatus">
            <h3> pepe</h3>
            <div class="status">
              <img  src="img/greenDot.png"/>
              <span>:c</span>
            </div>
          </div>
        </aside>
        <div class="createPost">
          <form action="" id="iNeed">
            <textarea id="descriptionPost" class="descriptionPost" placeholder="¿Qué estás pensando?" spellcheck = "false" required></textarea>
            <input type="file" class="inputFile" id="postPhoto">
            <div class="optionSeccion">
              <select id="privacy-option">
                <option value="public" title = "Public">Public</option>
                <option value="private" title = "Private">Private</option>
              </select>
              <button  id="btnPost" class="btnDangerPost" >Publicar</button>
            </div>
          </form>
        </div>
      
       `;

  const btnPost = viewHome.querySelector('#btnPost');
  const descriptionPost = viewHome.querySelector('#descriptionPost');
  const postPhoto = viewHome.querySelector('#postPhoto');

  const userPrincipal = viewHome.querySelector('.userPrincipal');

  hearSign((user) => {
    const html = `<img class="photoProfile" src="${user.photoURL}"/>
          <div class="userAndStatus">
            <h3 >${user.displayName}</h3>
            <div class="status">
              <img  src="img/greenDot.png"/>
              <span>${user.email}</span>
            </div>
          </div>`;
    userPrincipal.innerHTML = html;
  });

  const validatePost = (datafile) => {
    if (descriptionPost.value === '' && datafile === undefined) {
      btnPost.disable = false;
      btnPost.classList.remove('btnCreatePost');
      btnPost.classList.add('btnDangerPost');
    } else if (datafile === undefined && descriptionPost.value) {
      console.log('sin imagen');
      const user = firebase.auth().currentUser;
      createPost(user.uid, user.displayName, descriptionPost.value, '');
      viewHome.querySelector('.descriptionPost').value = '';
      viewHome.querySelector('.inputFile').value = '';
      btnPost.classList.remove('btnDangerPost');
      btnPost.classList.add('btnCreatePost');
    } else {
      console.log('subir imagen');
      btnPost.classList.remove('btnDangerPost');
      btnPost.classList.add('btnCreatePost');
      createUrlImgPost(postPhoto.files[0])
        .then((urlImg) => {
          const user = firebase.auth().currentUser;
          createPost(user.uid, user.displayName, descriptionPost.value, urlImg);
          viewHome.querySelector('.descriptionPost').value = '';
          viewHome.querySelector('.inputFile').value = '';
        })
        .catch((error) => console.log(error));
    }
  };

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click-crearPost');
    console.log(event);
    validatePost(postPhoto.files[0]);
  });

  descriptionPost.addEventListener('keydown', (e) => {
    console.log(e);
    console.log(e.key);

    if (e.key === 'Backspace' && descriptionPost.value === '') {
      console.log('hola');
      btnPost.classList.remove('btnCreatePost');
      btnPost.classList.add('btnDangerPost');
    } else {
      btnPost.classList.remove('btnDangerPost');
      btnPost.classList.add('btnCreatePost');
    }
  });

  renderPostUser(viewHome);

  return viewHome;
};
