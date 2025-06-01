function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
  }

  const buttons = document.querySelectorAll('[data-dropdown]');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      if (window.innerWidth <= 1220) {
        e.preventDefault();
        const dropdownContent = this.nextElementSibling;

        dropdownContent.classList.toggle('show');

        document.querySelectorAll('.dropdown-content').forEach(content => {
          if (content !== dropdownContent) {
            content.classList.remove('show');
          }
        });
      }
    });
  });