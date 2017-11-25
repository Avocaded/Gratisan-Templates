/* ---------------------------------------------
 Contact Form Js
 --------------------------------------------- */
// contact form
$(document).ready(function() {
    $('form#contact_form').submit(function() {
    $('form#contact_form .error').remove();
    var hasError = false;
    $('.form-controllar').each(function() {
    if(jQuery.trim($(this).val()) == '') {
    //var labelText = $(this).prev('name').text();
    var name = $(this).attr('name');
    $(this).parent().append('<span class="error">Please fill out '+name+' field.</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).hasClass('email')) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(jQuery.trim($(this).val()))) {
    //var labelText = $(this).prev('name').text();
    var name = $(this).attr('name');
    $(this).parent().append('<span class="error">You entered an invalid '+name+'.</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    if(!hasError) {
    $('form#contact_form input.submit').fadeOut('normal', function() {
    $(this).parent().append('');
    });
    var formInput = $(this).serialize();
    $.post($(this).attr('action'),formInput, function(data){
    $('form#contact_form').slideUp("fast", function() {
    $(this).before('<div class="success">Thank you. Your email was sent successfully.</div>');
    });
    });
    }
    return false;
    });
});