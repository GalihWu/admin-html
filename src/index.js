import './styles.css';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggleBtn = document.querySelector('.theme-toggler');
const menuItems = document.querySelectorAll('.sidebar a');

// show sidebar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// close sidebar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// change theme
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggleBtn.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggleBtn.querySelector('span:nth-child(2)').classList.toggle('active');
});

// sidebar active class
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
  });
});
