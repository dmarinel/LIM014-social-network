import { createPost } from '../lib/user/postsService.js';
import { renderPostUser } from './posts.js';

export default () => {
  const viewHome = document.createElement('div');
  viewHome.innerHTML = `
      <div class="containerPost">
      <div class="boxPost">
        <form action="">
          <textarea id="descriptionPost" placeholder="¿Qué estás pensando?" spellcheck = "false" required></textarea>
        </form> 
      </div>
    </div>

    <div class="optionSeccion">
      <select id="privacy-option">
        <option value="public" title = "Public">Public</option>
        <option value="private" title = "Private">Private</option>
      </select>
      <button  id="btnPost" >Publicar</button>
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
