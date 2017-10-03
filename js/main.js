$(document).ready(function()	{
	$('.hover').hover(
			function (){
				$(this).children('.dropmenu').slideDown(200);
			},

			function(){
				$(this).children('.dropmenu').slideUp(200);
			}
		);

	$('#sub-list').click(blank);
		function blank() {
			$('#sub-list').val('');
		}

		$('#sub-list').focusout(restore);

	    function restore() {
	    	var email = $('#sub-list').val();
	    	if (email == "")
				$('#sub-list').val('Your e-mail address');
		}

	$('#subscribe').click(emaillist);

		function emaillist(event){
		//event.preventDefault();x

		var email = $('#sub-list').val();

		localStorage.setItem('email', email);
	}

	var images=[
	"images/Chicken-Marsala.jpg",
	"images/alfredo.jpg",
	"images/scampi.jpg"
	];

	var title=[
	"Chicken Marsala",
	"Fettucini Alfredo w/ Sausage",
	"Shrimp Scampi"
	];

	var description=[
	"Aurora's Chicken Marsala is easy to enjoy and even easier to prepare. Follow these simple steps to cook a delicious meal",
	"Try Aurora's delicious Fettucini Alfredo with a twist; chunks of sausage and peas.",
	"Everyone loves a good Shrimp Scampi. Everyone doesn't have a simple recipe they can follow. Try this out today!"
	];

	var link=[
	'<a href="chickenmarsala.html">Learn More</a>',
	'<a href="alfredo.html">Learn More</a>',
	'<a href="scampi.html">Learn More</a>'
	];

	var i=0;

	function nextimage(){
	if (i+1<images.length){
		i++;
		change();
	}
}

	function previousimage(){
		if (i>0){
			i--;
			change();
		}
}

	function change(event){
		$(".holder").attr("src", images[i]);
		$("#head").html(title[i]);
		$("#descriptor").html(description[i]);
		$("#link").attr("a", link[i]);
		event.preventDefault();
	}
	
	$("#button-holder .bttn[value='Next>']").on("click", nextimage);
	$("#button-holder .bttn[value='<Back']").on("click", previousimage);

});
