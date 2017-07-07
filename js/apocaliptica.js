
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


// to clear the modal form input fields when it is closed ---------------
