
//masonry js initializer
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  horizontalOrder: true
});

// to collapse the navbar when I click on one of the links
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

//slick plubin initializer and options
$(`.slickness`).slick({
  autoplay: true,
  slidesToShow: 2,
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
        arrows: false
      }
    }
  ]
});

// to initialize Tooltips for each of the images on the Main Page picture Gallery
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

// Lightbox options
lightbox.option({
  albumLabel:  "Imágen %1 de %2"
})



// I need to clear the modal form input fields when it is closed, that is when either of the btn's are clicked on or the modal is closed       ---------------





// to grab the navbar-brand text inside the <a> tag and align it to the baseline of the logo <img>
// const brandLogo = document.getElementById('small-on-xs').textContent; //not doing anything with this yet

