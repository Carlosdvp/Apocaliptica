
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
        dots: true,
        arrows: false,
        variableWidth: true
      }
    }
  ]
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


// there has to be a way to customize the color of the text inside the tooltip. I think that this can be done either with CSS, or by using the HTML option for the tooltip combined with the text-danger Class for <p> elements.



// I need to clear the modal form input fields when it is closed, that is when either of the btn's are clicked on or the modal is closed       ---------------





// to grab the navbar-brand text inside the <a> tag and align it to the baseline of the logo <img>
// const brandLogo = document.getElementById('small-on-xs').textContent; //not doing anything with this yet

