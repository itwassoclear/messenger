import './profile.less';

const plug = document.querySelector('.plug');
const avatar = document.querySelector('.avatar');

avatar.addEventListener('mouseover', () => {
  plug.style.opacity = 100;
});

avatar.addEventListener('mouseout', () => {
  plug.style.opacity = 0;
});
