import tailwindColors from 'tailwindcss/colors';

function updateTheme() {
  // These should match header background colors
  const tailwindDark = tailwindColors.neutral['900'];
  const tailwindLight = tailwindColors.neutral['100'];

  const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userPreference = localStorage.getItem('theme');

  // Ensure a theme is set
  if (userPreference === null) {
    localStorage.setItem('theme', 'auto');
  }

  // Update the DOM
  if (userPreference === 'dark' || ((userPreference === 'auto') && browserPrefersDark)) {
    document.documentElement.classList.add('dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', tailwindDark);
  } else {
    document.documentElement.classList.remove('dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', tailwindLight);
  }
}

// This executes immediately on load to avoid FOUC
updateTheme();

document.addEventListener('DOMContentLoaded', () => {
  const buttonActiveClasses = ['bg-white', 'dark:bg-black', 'rounded-b-md'];

  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', updateTheme);

  document.querySelectorAll('.theme-toggle-button').forEach($button => {
    $button.addEventListener('click', event => {
      const $menu = $button.parentElement.querySelector('.theme-toggle-menu');
      $menu.classList.toggle('hidden');
      buttonActiveClasses.forEach(className => { $button.classList.toggle(className )});
    });
  });

  document.querySelectorAll('.theme-toggle-menu-item').forEach($menuItem => {
    $menuItem.addEventListener('click', event => {
      event.preventDefault();

      localStorage.setItem('theme', $menuItem.dataset.theme);
      updateTheme();

      const $menu = event.target.closest('.theme-toggle-menu');
      $menu.classList.toggle('hidden');
      const $button = $menu.parentElement.querySelector('.theme-toggle-button');
      buttonActiveClasses.forEach(className => { $button.classList.toggle(className) });
    });
  });

  // Detect clicks outside of the theme toggle menu
  document.addEventListener('click', event => {
    const menus = Array.from(document.querySelectorAll('.theme-toggle-menu'));
    const buttons = Array.from(document.querySelectorAll('.theme-toggle-button'));
    const targetInsideMenu = menus.some($menu => $menu.contains(event.target));
    const targetInsideButton = buttons.some($button => $button.contains(event.target));
    if (!targetInsideMenu && !targetInsideButton) {
      menus.forEach($menu => $menu.classList.add('hidden'));
      buttons.forEach($button => {
        buttonActiveClasses.forEach(className => { $button.classList.remove(className) });
      });
    }
  });

});
