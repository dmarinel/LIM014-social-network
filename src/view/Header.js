import { signOut } from '../lib/user/userService.js';

export default () => {
  const viewHeader = document.createElement('div');
  viewHeader.innerHTML = `
  <nav>
  <ul class="">
    <div id="" class= "">
    <img src="img/funkOkkHeader.png" width="131" height="50"  alt="logo">
      <li class=""><a href="#/Home"><i class=""></i>Home</a></li>
      <li class=""><a href="#/Profile"><i class=""></i>Profile</a></li>
    </div>
      <li class=""><a href="#/Home">Funk-okk</a></li>
      <li id="" class=""><span id =""><i class=""></i> <button id="btnLogOut" >Log out</button> </span></li>
  </ul>
</nav>
`;
  // *********************************************logOut

  const btnLogOut = viewHeader.querySelector('#btnLogOut');

  btnLogOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOut()
      .then(() => {
        console.log('Cerrando sesión...');
        window.location.hash = '';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return viewHeader;
};
// ************ok
