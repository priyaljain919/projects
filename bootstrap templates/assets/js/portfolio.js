	window.onscroll = function() {myFunction()};
	// window.onload = function(){myFunction1()};
	function myFunction() {
	var x = document.body.scrollTop;
	console.log(x);
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {

        document.getElementById("myNav").className = "nav-sink";
        // document.getElementById("header-textt").style = "padding-top:200px";

    } else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){

        // document.getElementById("header-textt").style = "padding-top:200px;";
        // document.getElementsByTagName("h1")[0].style = "font-size:42px";
        document.getElementById("myNav").className = "";
     }
 //     var elements = document.getElementsByClassName("navv");
	// for(var i = 0;i < elements.length;i++){

	// 	elements[i].onclick = function(){
	// 		var el = elements[0];
	// 		this.classList.add("active");
	// 		while(el){

	// 			if(el.tagName == "A")
	// 			{
	// 				el.classList.remove("active");
	// 			}
	// 			el.nextSibling;
	// 		}
			
	// 	};
	// }
	}
	


	