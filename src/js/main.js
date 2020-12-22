import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import animation from './modules/animation.js';
import illness from './modules/illness.js';
import reviews from './modules/reviews.js';
<<<<<<< HEAD
import banner from './modules/banner.js';
=======
import stat from './modules/stat.js';
>>>>>>> 61dc18eec345fefa4806d464bc7158756dda95ad
function main() {
	scrollSmooth();
	animation();
	illness();
<<<<<<< HEAD
  reviews();
  banner()
=======
	reviews();
	stat();
>>>>>>> 61dc18eec345fefa4806d464bc7158756dda95ad
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
