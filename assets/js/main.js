import lightGallery from 'lightgallery';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.nav-burger').forEach($burger => {
    const $openIcon = $burger.querySelector('.nav-burger-icon-open');
    const $closeIcon = $burger.querySelector('.nav-burger-icon-close');
    const $cheezburger = $burger.querySelector('.cheezburger');
    const $navItems = document.getElementById($burger.dataset.target);

    let cheezburgers = 0;
    $burger.addEventListener('click', event => {
      if (++cheezburgers >= 4) {
        $openIcon.classList.add('hidden');
        $closeIcon.classList.add('hidden');
        $cheezburger.classList.remove('hidden');
      } else {
        $openIcon.classList.toggle('block');
        $openIcon.classList.toggle('hidden');
        $closeIcon.classList.toggle('block');
        $closeIcon.classList.toggle('hidden');
      }
      $navItems.classList.toggle('hidden');
    });
  });

  lightGallery(document.getElementById('gallery'), {
    licenseKey: '0000-0000-000-0000',
    plugins: [lgFullscreen, lgZoom],
    speed: 250,
    backdropDuration: 100,
    mousewheel: true,
    selector: '.gallery-image'
  });

});
