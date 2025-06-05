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





  document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".carousel-dots .dot");
    const reviewCards = document.getElementById("reviewCards");
    const card = reviewCards.querySelector(".cards");
    const cardWidth = card.offsetWidth + 48; // 48px = gap: 3rem

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        reviewCards.scrollTo({
          left: index * cardWidth,
          behavior: "smooth"
        });

        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });
  });



  