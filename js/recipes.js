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

	$('#search').click(clear);
			function clear() {
				$('#search').val('');
		}

		$('#search').focusout(fill);

	    function fill() {
	    	var search = $('#search').val();
	    	if (search == "")
				$('#search').val('Search...');
		}

	$('#subscribe').click(emaillist);

		function emaillist(event){
		//event.preventDefault();x

		var email = $('#sub-list').val();

		localStorage.setItem('email', email);
	}
});