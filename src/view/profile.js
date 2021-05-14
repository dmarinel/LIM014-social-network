import { hearSign } from '../lib/user/userService.js';

export default () => {
  const viewProfile = document.createElement('section');
  viewProfile.innerHTML = `
        <div class="profile"> 
        
        </div>`;

  const profile = viewProfile.querySelector('.profile');
  hearSign((user) => {
    const html = `<img class="photoProfile" src="${user.photoURL}"/>
    <div class="userAndStatus">
      <h2>${user.displayName}</h2>
      <p>${user.email}</p>
    </div>`;
    profile.innerHTML = html;
  });

  return viewProfile;
};
