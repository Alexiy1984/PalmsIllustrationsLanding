import '../styles/index.scss';
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

document.addEventListener("DOMContentLoaded", function () {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
  });

  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animate__animated',     
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true, 
  });

  wow.init();
});


