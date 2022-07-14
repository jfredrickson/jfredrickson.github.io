import "./navbar.js";
import lightGallery from 'lightgallery';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgZoom from 'lightgallery/plugins/zoom';

lightGallery(document.getElementById('gallery'), {
  licenseKey: '0000-0000-000-0000',
  plugins: [lgFullscreen, lgZoom],
  speed: 250,
  backdropDuration: 100,
  mousewheel: true,
  selector: '.image'
});
