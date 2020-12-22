import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import animation from './modules/animation.js';
import illness from './modules/illness.js';
import reviews from './modules/reviews.js';
import banner from './modules/banner.js';
import stat from './modules/stat.js';
function main() {
	scrollSmooth();
	animation();
	illness();
  reviews();
  banner()
	reviews();
	stat();
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
