function updateTheme() {
  const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userPreference = localStorage.getItem('theme');
  if (userPreference === 'dark' || ((userPreference === null) && browserPrefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// This executes immediately on load to avoid FOUC
updateTheme()

document.addEventListener('DOMContentLoaded', () => {

  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', updateTheme);

  document.querySelectorAll('.theme-toggle-button').forEach($button => {
    $button.addEventListener('click', event => {
      const $menu = $button.parentElement.querySelector('.theme-toggle-menu');
      $menu.classList.toggle('hidden');
      $button.classList.toggle('is-active');
    });
  });

  document.querySelectorAll('.theme-toggle-menu-item').forEach($menuItem => {
    $menuItem.addEventListener('click', event => {
      event.preventDefault();
      const selectedTheme = $menuItem.dataset.theme;

      if (selectedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }

      if (selectedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      if (selectedTheme === 'auto') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.removeItem('theme');
      }

      const $menu = event.target.closest('.theme-toggle-menu');
      $menu.classList.toggle('hidden');
      const $button = $menu.parentElement.querySelector('.theme-toggle-button');
      $button.classList.remove('is-active');
    });
  });

});
