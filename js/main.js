jQuery( document ).ready(function($) {
  $(".product_carousel").owlCarousel({

  	items:4,
  	margin:30,
  	loop:true,
  	nav:true,
  	autoplay:true,
  	autoplayTimeout:2000,
  	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  }); 
});