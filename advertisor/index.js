jQuery(document).ready(function($) {
    "use strict";
    $('#sumit').click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var skypeId = $('#skypeId').val();
        var company = $('#company').val();
        var emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        var status = true;
        if(name == undefined || name == '' || name == null){
            $('.nameError').html('Please enter your name');
            status = false;
        } else {
            $('.nameError').html('');
            status = true;
        }
        if(email == undefined || email == '' || email == null){
            $('.emailError').html('Please enter your Email ID');
            status = false;
        } else {
            $('.emailError').html('');
            status = true;
        }
        if ((email != undefined && email != '' && email != null) && !emailExp.test(email)) {
            $('.emailError2').html('Please enter valid Email ID');
            status = false;
        } else {
            $('.emailError2').html('');
            status = true;
        }
        if(phone == undefined || phone == '' || phone == null){
            $('.phoneError').html('Please enter your contact number');
            status = false;
        } else {
            $('.phoneError').html('');
            status = true;
        }
        if(skypeId == undefined || skypeId == '' || skypeId == null){
            $('.skypeError').html('Please enter your skype ID');
            status = false;
        } else {
            $('.skypeError').html('');
            status = true;
        }
        if(company == undefined || company == '' || company == null){
            $('.companyError').html('Please select company type');
            status = false;
        } else {
            $('.companyError').html('');
            status = true;
        }
        if(status == false) {
            return false;
        } else {
            $('#sendmessage').css('display', 'block');
            setTimeout(function(){
            $('#sendmessage').fadeOut(1000);
            }, 4000);
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#skypeId').val('');
            $('#company').val('');
        }
    });

});