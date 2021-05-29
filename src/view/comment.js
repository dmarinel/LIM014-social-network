import { creatingComment, getComment } from '../lib/user/commentService.js';
import { getPostById } from '../lib/user/postsService.js';


export const renderComment = (idPost) => {
  const postComment = document.createElement('section');
  getComment(idPost, (commentPost) => { 
    let newComment = document.getElementById(idPost);
    commentPost.forEach((doc) => {
      const commentDiv = document.createElement('div');
      console.log(doc)
      commentDiv.innerHTML = 
      `
      <div class="containerComment">
        <img class="pictureComment" src="" alt="foto_usuario">
        <p class="userName">${doc.nameUser}</p>
        <textarea class="textComment" id="">${doc.comments}</textarea>
        <p class="timeComment">${doc.date}</p>
    </div>
      `
      newComment.appendChild(commentDiv);
    });
  });

  let currentUserName = firebase.auth().currentUser.displayName;
  const allComment = postUser.querySelector('#allCommentContainer');
  const commentBtn = postUser.querySelector('.publicar');

  postComment.querySelectorAll('.publicar').forEach((comment) => comment.addEventListener('click', (e) => {

    const newComment = postUser.querySelector('.comment').value;
    const date = new Date().toLocaleString('GMT-0500');
    const userUid = firebase.auth().currentUser.uid;
    console.log(newComment);
    creatingComment(currentUserName,e.target.dataset.id, newComment, userUid, date);
    let getComment = document.getElementById(e.target.dataset.id)
    getComment.innerHTML = "";
  }));
};