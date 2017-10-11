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
	"images/pesto.jpg"
	];

	var title=[
	"Chicken Marsala",
	"Fettucini Alfredo w/ Sausage",
	"Chicken Pesto Pasta"
	];

	var description=[
	"Aurora's Chicken Marsala is easy to enjoy and even easier to prepare. Follow these simple steps to cook a delicious meal",
	"Try Aurora's delicious Fettucini Alfredo with a twist; chunks of sausage and peas.",
	"Chicken Pesto and Pasta with a nutty twist. See why this unique and flavorful recipe isn't as complicated to make as you may think"
	];

	var link=[
	'chickenmarsala.html',
	'alfredo.html',
	'chickenpesto.html'
	];

	var i=0;

	$("#button-holder .bttn[value='Next>']").on("click", nextimage);
	$("#button-holder .bttn[value='<Back']").on("click", previousimage);

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

	function change(){
		$("#contain").attr("src", images[i]);
		$("#head").html(title[i]);
		$("#descriptor").html(description[i]);
		$("#link").attr("href", link[i]);
	}
	

});
