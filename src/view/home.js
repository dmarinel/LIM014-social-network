import { createPost } from '../lib/user/postsService.js';
import { hearSign } from '../lib/user/userService.js';
// import { hearSign } from '../lib/user/userService.js';
import { renderPostUser } from './posts.js';

export default (user) => {
  const viewHome = document.createElement('section');
  viewHome.classList.add('containerHome');
  // const usernameId = firebase.auth().currentUser.uid;
  viewHome.innerHTML = `
        <aside class="userPrincipal">
         
        </aside>
        <div class="createPost">
          <form action="" >
            <textarea id="descriptionPost" class="descriptionPost" placeholder="¿Qué estás pensando?" spellcheck = "false" required></textarea>
            <input type="file" class="inputFile">
            <div class="optionSeccion">
              

              <select id="privacy-option">
                <option value="public" title = "Public">Public</option>
                <option value="private" title = "Private">Private</option>
              </select>
              <button  id="btnPost" >Publicar</button>
            </div>
          </form>
        </div>
      
       `;
  // console.log(hearSign(user));
  const btnPost = viewHome.querySelector('#btnPost');
  const descriptionPost = viewHome.querySelector('#descriptionPost');
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

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    console.log(user);
    createPost(user.uid, user.displayName, descriptionPost.value)
      .then((docRef) => console.log('Document written with ID: ', docRef.id));
    viewHome.querySelector('.descriptionPost, .inputFile').value = '';
  });

  // console.log(renderPostUser());
  renderPostUser(viewHome);
  // console.log(renderPostUser());
  return viewHome;
};
