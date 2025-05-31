let menulist = document.getElementById('menuList');

menulist.style.maxHeight = '0px';

function toggleMenu() {
    if (menulist.style.maxHeight == '0px') {
        menulist.style.maxHeight = '50vh'; // or any height that shows the menu
    } else {
        menulist.style.maxHeight = '0px';
    }
}
