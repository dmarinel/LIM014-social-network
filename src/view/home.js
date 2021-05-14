import { createPost, createUrlImgPost } from '../lib/user/postsService.js';
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
            <h3 >
            
            pepe</h3>
            <div class="status">
              <img  src="img/greenDot.png"/>
              <span>
             
              :c</span>
            </div>
          </div>
        </aside>
        <div class="createPost">
          <form action="" id="iNeed">
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

  const btnPost = viewHome.querySelector('#btnPost');
  const descriptionPost = viewHome.querySelector('#descriptionPost');
  const postPhoto = viewHome.querySelector('#postPhoto');

  btnPost.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click-crearPost');
    console.log(postPhoto.files[0]);

    createUrlImgPost(postPhoto.files[0])
      .then((urlImg) => {
        const user = firebase.auth().currentUser;
        createPost(user.uid, user.displayName, descriptionPost.value, urlImg);
        viewHome.querySelector('.descriptionPost').value = '';
        viewHome.querySelector('.inputFile').value = '';
      })
      .catch((error) => console.log(error));
    
  });
  
  renderPostUser(viewHome);
  
  return viewHome;
};
