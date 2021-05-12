export const renderModalPost = (data) => {
  console.log(data.posting);
  const modalEditPost = document.createElement('div');
  modalEditPost.classList.add('modal-content');
  modalEditPost.innerHTML = `
      
        <span class="close">&times;</span>
        <section>
          <img src="" alt="">
          <p>Nombre de usuario</p>
          <textarea id="inputPost" type="text">${data.posting}</textarea>
        </section>
        <section>
          <input type="file">
        </section>
        <button id="btnPostUpdate">Update</button>
    
      `;
  return modalEditPost;
};
