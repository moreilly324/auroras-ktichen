$(document).ready(function()    {

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

$('#settings-form').submit(saveFormData);

  function saveFormData(event) {
   // event.preventDefault();

    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var dob = $('#dob').val();
    var phone = $('#phone').val();
    var gender = $('input[name="gender"]:checked').val();
    var bio = $('#reason').val();

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('dob', dob);
    localStorage.setItem('phone', phone);
    localStorage.setItem('gender', gender);
    localStorage.setItem('reason', bio);
  }

  function populateForm(event) {
   // event.preventDefault();

    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');
    var dob = localStorage.getItem('dob');
    var phone = localStorage.getItem('phone');
    var gender = localStorage.getItem('gender');
    var bio = localStorage.getItem('reason');

    $('#first-name').val(firstName);
    $('#last-name').val(lastName);
    $('#email').val(email);
    $('#password').val(password);
    $('#dob').val(dob);
    $('#phone').val(phone);
    $('input[name="gender"][value="'+ gender +'"]').prop('checked', true);
    $('#reason').val(bio);
  }

  populateForm();

});