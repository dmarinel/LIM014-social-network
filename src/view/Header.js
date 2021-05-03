export default () => {
  const viewHeader = document.createElement('div');
  viewHeader.innerHTML = `
  <nav>
  <ul class="">
    <div id="" class= "">
      <li class=""><a href="#/Home"><i class=""></i>Home</a></li>
      <li class=""><a href="#/Profile"><i class=""></i>Profile</a></li>
    </div>
      <li class=""><a href="#/Home">Funk-okk</a></li>
      <li id="" class=""><span id =""><i class=""></i> <a href="">Log out</a> </span></li>
  </ul>
</nav>
`;

  return viewHeader;
};
