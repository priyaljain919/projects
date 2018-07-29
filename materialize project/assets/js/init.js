 
 // Or with jQuery
$(document).ready(function(){
    $('.tabs').tabs();
	$('.dropdown-trigger').dropdown({
		inDuration:300,
		outDuration:225,
		constrainWidth:false,
		gutter:0,
		belowOrigin:true,
		alignment:'left',
		stopPropagation:false
	});
 });
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
// $(window).on('load', function() {
//             $('.preloader').delay(350).fadeOut('slow');
//             $('.preloader-wrapper').delay(350).fadeOut();
//  });
$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();


