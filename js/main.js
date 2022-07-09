(() => {
  // ns-hugo:/home/runner/work/jfredrickson.github.io/jfredrickson.github.io/assets/js/navbar.js
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    $navbarBurgers.forEach((burger) => {
      let cheezburgers = 0;
      burger.addEventListener("click", () => {
        if (++cheezburgers === 4) {
          const img = document.createElement("img");
          img.src = "/images/nav-hamburger.png";
          img.classList.add("navbar-cheezburger");
          burger.replaceChildren(img);
        }
        const target = burger.dataset.target;
        const $target = document.getElementById(target);
        burger.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });
})();
