 const menuIcon = document.querySelector('#menu-icon');
 const navLinks = document.querySelector('.navLinks');

 menuIcon.onclick = () => {
   menuIcon.classList.toggle('fa-xmark');
   navLinks.classList.toggle('active');
 };