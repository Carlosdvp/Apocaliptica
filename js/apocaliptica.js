
// to collapse the navbar when I click on one of the links
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});


//slick plugin initializer and options for the home page, 
// For the first Row slideshow on the homepage
$(`.slickness`).slick({
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  variableWidth: true,
  centerMode: true
  // responsive: [
  //   {
  //     breakpoint: 740,
  //     settings: {
  //       slidesToShow: 1,
  //       infinite: true,
  //       dots: true,
  //       arrows: false,
  //       variableWidth: true
  //     }
  //   }
  // ]
});
// For the Second Row slideshow on the homepage
$(`.slickness-2`).slick({
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 280,
  dots: true,
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  variableWidth: true,
  centerMode: true
});
// For the Third Row slideshow on the Homepage
$(`.slickness-3`).slick({
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 290,
  dots: true,
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  variableWidth: true,
  centerMode: true
});


// Seccion de Presentación: Fotos del equipo Apocaliptica
$(`.slickness-4`).slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  dots: false,
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  variableWidth: true,
  centerMode: true
});


// Slick plugin for the project pages, one row gallery slideshow
$(`.slickness-proyectos`).slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: true
      }
    }
  ]
});

// Slick plugin for the project pages that will have 3 slides onscreen, one row gallery slideshow
$(`.slickness-proyectos-multiSlides`).slick({
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  swipeToSlide: true,
  variableWidth: true,
  centerMode: true
});

// to initialize Bootstrap Tooltips for each of the images on the Main Page picture Gallery
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    container: `body`,
    placement: `bottom`,
    trigger: `hover`,
    offset: `50 0`,
    animation: false
  })
})


// JS code for the YouTube Player

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  });
}

function onPlayerReady(event) {
  document.getElementById('player').style.borderColor = 'firebrick';
  event.target.playVideo();
}

function changeBorderColor(playerStatus) {
  var color;
  if (playerStatus == -1) {
    color = "darkred"; // unstarted
  } else if (playerStatus == 1) {
    color = "firebrick"; // playing
  } 
  if (color) {
    document.getElementById('player').style.borderColor = color;
  }
}

function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}
