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
      $navItems.classList.toggle('max-h-0');
      $navItems.classList.toggle('max-h-64');
    });
  });

  lightGallery(document.getElementById('gallery'), {
    licenseKey: 'B0A4E2E0-81C4462E-93DC60B9-303A6D26',
    plugins: [lgFullscreen, lgZoom],
    speed: 250,
    backdropDuration: 100,
    mousewheel: true,
    selector: '.gallery-image',
    defaultCaptionHeight: 150,
  });

});
