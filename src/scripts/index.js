import '../styles/index.scss';
import LazyLoad from 'vanilla-lazyload';
import WOW from 'wow.js';
var $ = require( "jquery" );

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

function changeAnimationDelay(element) {
  $(element).each(function(index){
    switch(index%8) {
      case 0: 
        $(this).attr('data-wow-delay', '0.2s');
        break;
      case 1: 
        $(this).attr('data-wow-delay', '0.7s');
        break;
      case 2: 
        $(this).attr('data-wow-delay', '0.4s');
        break;
      case 3: 
        $(this).attr('data-wow-delay', '0.9s');
        break; 
      case 4: 
        $(this).attr('data-wow-delay', '0.6s');
        break;
      case 5: 
        $(this).attr('data-wow-delay', '0.3s');
        break;
      case 6: 
        $(this).attr('data-wow-delay', '0.8s');
        break;
      case 6: 
        $(this).attr('data-wow-delay', '0.5s');
        break;    
      default:
        break;
    }
  });
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

  if ($(window).width() < 560) {
    $('.full-preview-block__item').attr('data-wow-delay', '0.1s');
  } else {
    changeAnimationDelay('.full-preview-block__item');
  }

  $(window).on('resize', function() {
    if ($(window).width() < 560) {
      $('.full-preview-block__item').attr('data-wow-delay', '0.1s');
    } else {
      changeAnimationDelay('.full-preview-block__item');
    }
  });

  wow.init();
});


