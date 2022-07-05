// Source: https://bulma.io/documentation/components/navbar/#navbar-menu

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(burger => {
    let cheezburgers = 0;
    burger.addEventListener('click', () => {
      // Shh
      if (++cheezburgers === 4) {
        const img = document.createElement('img');
        img.src = '/images/nav-hamburger.png';
        img.classList.add('navbar-cheezburger');
        burger.replaceChildren(img);
      }

      // Get the target from the "data-target" attribute
      const target = burger.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      burger.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
