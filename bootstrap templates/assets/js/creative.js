// $(document).ready(function(){
//     $('.navbar-nav').on('click','li',function(){
// 		$('.navbar-nav').removeClass('active');
// 		$(this).addClass('active');
// 	});
// });

//      var y = document.getElementById("myPage");
//      console.log("offset top",y);
//      var p = y.offsetTop;
//      if(p >= 700){
//      	document.getElementById("servicess").className = "active";
//      }else if(p >= 950){
//      	document.getElementById("servicess").classList.remove("active");
//      }
     
 //        var elements = document.getElementsByClassName("navv");
	// for(var i = 0;i < elements.length;i++){

	// 	elements[i].onclick = function(){
	// 		this.className = "active";
	// 		var el = elements[0];
			
	// 		if(el){
	// 			// this.classList.remove("active");
	// 			// document.getElementById("navUl").classList.remove("active");
	// 			// elements[i].className.replace("active","");
	// 			 el.className = el.className.replace("", "active");
	// 		}
			
		
			
	// 	};
	// }


        
// }
window.onscroll = function(){myFunction()};
// window.onscroll = function(){myFunction1()};
function myFunction(){
	var x = document.body.scrollTop;
	console.log(x);
	if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
		
		document.getElementById("myNav").className = "navbar-shrink";
		document.getElementById("fa-diamond").style = "opacity:1;transition: 0.8s all;color:#b9f2ff;transform: scale(1.2);animation-duration:1s;animation-name:mymove !important;animation-iteration-count:infinite;";
     	document.getElementById("fa-diamond2").style = "opacity:1;transform:scale(1);transition: 1s all;animation-name:myplane;animation-duration:2.5s;color:#ffab00;animation-iteration-count:infinite;transition: transform 1s cubic-bezier(0.52, 1.64, 0.37, 0.66) 0s;transition-property: transform;";
     	document.getElementById("fa-diamond3").style = "opacity:1;transform:scale(1);transition: 1.2s all;color:black;animation-name:mynewspaper;animation-duration:2s;animation-iteration-count: infinite;";
     	document.getElementById("fa-diamond4").style = "opacity:1;transform:scale(1);transition: 1.4s all;color:red;animation-name:myheart;animation-duration:2s;animation-iteration-count:infinite;";
     	document.getElementById("fa-phone").style = "opacity:1;transform:scale(1.2);color:black;animation-name:myphone;animation-duration:1s;animation-iteration-count:infinite;"
     	document.getElementById("fa-envelope").style = "color:black;animation-name:myenvelope;animation-iteration-count:infinite;animation-duration:1.5s;"
	
	 } else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){

        document.getElementById("myNav").className = "";
     }
    
 }
 document.getElementById("bg-cover").addEventListener("mousemove",function(e){
			myFunction1(event);
		});
 	function myFunction1(e){
 		var moveX = (e.pageX * -1 / 15);
 		var moveY = (e.pageY * -1/ 15);
 		document.getElementById("bg-cover").style = "backgroundPosition: "+moveX+" 'px' "+moveY+" 'px'";
 	}
 	
  // }else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){

  // 		document.getElementById("fa-diamond").style = "opacity:0;transform:scale(1);transition: 0.8s all;";
  //    	document.getElementById("fa-diamond2").style = "opacity:0;transform:scale(1);transition: 1s all;";
  //    	document.getElementById("fa-diamond3").style = "opacity:0;transform:scale(1);transition: 1.2s all;";
  //    	document.getElementById("fa-diamond4").style = "opacity:0;transform:scale(1);transition: 1.4s all;";
  // }


  

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict
