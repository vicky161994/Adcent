jQuery(document).ready(function($) {
    "use strict";
    $('#sumit').click(function(e) {
        e.preventDefault();
        var checkbox1 = null;
        var checkbox2 = null;
        var checkbox3 = null;
        var checkbox4 = null;
        var checkbox5 = null;
        var checkbox6 = null;
        var companyType = $('#companyType').val();
        var company = $('#companyname').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var address1 = $('#address1').val();
        var address2 = $('#address2').val();
        var counrty = $('#counrty').val();
        var state = $('#state').val();
        var city = $('#city').val();
        var phone = $('#phone').val();
        var skypeId = $('#skypeId').val();
        if($('#checkbox1').prop("checked") == true){
            checkbox1 = $('#checkbox1').val();
        }
        if($('#checkbox2').prop("checked") == true){
            checkbox2 = $('#checkbox2').val();
        }
        if($('#checkbox3').prop("checked") == true){
            checkbox3 = $('#checkbox3').val();
        }
        if($('#checkbox4').prop("checked") == true){
            checkbox4 = $('#checkbox4').val();
        }
        if($('#checkbox5').prop("checked") == true){
            checkbox5 = $('#checkbox5').val();
        }
        if($('#checkbox6').prop("checked") == true){
            checkbox6 = $('#checkbox6').val();
        }
        var describe = $('#describe').val();
        var emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        var status = true;
        if(companyType == undefined || companyType == '' || companyType == null){
            $('.companyTypeError').html('Please select company type');
            status = false;
        } else {
            $('.companyTypeError').html('');
            status = true;
        }
        if(company == undefined || company == '' || company == null){
            $('.companyError1').html('Please enter company name');
            status = false;
        } else {
            $('.companyError1').html('');
            status = true;
        }
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
        if(address1 == undefined || address1 == '' || address1 == null){
            $('.addressError1').html('Please enter your address');
            status = false;
        } else {
            $('.addressError1').html('');
            status = true;
        }
        if(address2 == undefined || address2 == '' || address2 == null){
            $('.addressError2').html('Please enter your address');
            status = false;
        } else {
            $('.addressError2').html('');
            status = true;
        }
        if(counrty == undefined || counrty == '' || counrty == null){
            $('.countryError').html('Please select country name');
            status = false;
        } else {
            $('.countryError').html('');
            status = true;
        }
        if(state == undefined || state == '' || state == null){
            $('.stateError').html('Please enter state name');
            status = false;
        } else {
            $('.stateError').html('');
            status = true;
        }
        if(city == undefined || city == '' || city == null){
            $('.cityError').html('Please enter city name');
            status = false;
        } else {
            $('.cityError').html('');
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
        if( (checkbox1 == undefined || checkbox1 == '' || checkbox1 == null) && 
            (checkbox2 == undefined || checkbox2 == '' || checkbox2 == null) &&
            (checkbox3 == undefined || checkbox3 == '' || checkbox3 == null) &&
            (checkbox4 == undefined || checkbox4 == '' || checkbox4 == null) &&
            (checkbox5 == undefined || checkbox5 == '' || checkbox5 == null) &&
            (checkbox6 == undefined || checkbox6 == '' || checkbox6 == null)
            ) {
            $('.checkboxError').html('Please select atleast one traffic details');
            status = false;
        } else {
            $('.checkboxError').html('');
            status = true;
        }
        if(describe == undefined || describe == '' || describe == null){
            $('.describeError').html('Please enter about your company name');
            status = false;
        } else {
            $('.describeError').html('');
            status = true;
        }
        if(status == false) {
            return false;
        } else {
            $('#sendmessage').css('display', 'block');
            setTimeout(function(){
            $('#sendmessage').fadeOut(1000);
            }, 4000);
            $('#companyType').val('');
            $('#companyname').val('');
            $('#name').val('');
            $('#email').val('');
            $('#address1').val('');
            $('#address2').val('');
            $('#counrty').val('');
            $('#state').val('');
            $('#city').val('');
            $('#phone').val('');
            $('#skypeId').val('');
            $('#checkbox1').prop('checked', false);
            $('#checkbox2').prop('checked', false);
            $('#checkbox3').prop('checked', false);
            $('#checkbox4').prop('checked', false);
            $('#checkbox5').prop('checked', false);
            $('#checkbox6').prop('checked', false);
            $('#describe').val('');

        }
    });

});