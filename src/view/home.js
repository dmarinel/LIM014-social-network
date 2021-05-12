import { createPost } from '../lib/user/postsService.js';
import { renderPostUser } from './posts.js';

export default (dataCurrentUser) => {
  const viewHome = document.createElement('section');
  viewHome.classList.add('containerHome');
  // const usernameId = firebase.auth().currentUser.uid;
  viewHome.innerHTML = `
        <aside class="userPrincipal">
          <img class="photoProfile" src="img/googleIcon.png"/>
          <div class="userAndStatus">
            <h3>Mar Suarez</h3>
            <div class="status">
              <img  src="img/greenDot.png"/>
              <span>pepito@gmail.com</span>
            </div>
          </div>
        </aside>
        <div class="createPost">
          <form action="">
            <textarea id="descriptionPost" class="descriptionPost" placeholder="¿Qué estás pensando?" spellcheck = "false" required></textarea>

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
  const btnPost = viewHome.querySelector('#btnPost');
  const descriptionPost = viewHome.querySelector('#descriptionPost');

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    console.log(user);
    createPost(user.uid, user.displayName, descriptionPost.value)
      .then((docRef) => console.log('Document written with ID: ', docRef.id));
  });
  // console.log(renderPostUser());
  renderPostUser(viewHome);
  // console.log(renderPostUser());
  return viewHome;
};
