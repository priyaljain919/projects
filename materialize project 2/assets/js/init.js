 
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
$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
		//scroll navbar
		window.onscroll = function() {scrollFunction()};
		window.onload = function() {scrollFunction()};
		function scrollFunction() {
  			if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
        		document.getElementById("navbar").style = "display:none;";
   				 } 
   			 if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 90) {
        document.getElementById("navbar").style = "display:block;top:-60px";
    		} 
	}

