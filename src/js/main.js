import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import animation from './modules/animation.js';


function main() {
	scrollSmooth();
	animation();

}

if (document.documentElement.clientWidth < 480) {
  window.addEventListener('scroll',
    function () {
      return setTimeout(main, 1000);
    }, {
      once: true
    });
} else {
  main();
};