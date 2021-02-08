//nav toggle
$('.hamburger').click(function () {
    $(this).toggleClass('hamb_open');
    $('.navigation_resp').toggleClass('open');
    $('.navimg').toggleClass('open');

    $('body').toggleClass('noscroll');
})

//
$button1 = $('.feature1');
$button2 = $('.feature2');
$button3 = $('.feature3');

$slide1 = $('.hctext1');
$slide2 = $('.hctext2');
$slide3 = $('.hctext3');

$image1 = $('.hcimg1');
$image2 = $('.hcimg2');
$image3 = $('.hcimg3');

function selected($selected, $noselected1, $noselected2) {
    $selected.addClass('activado');
    $noselected1.removeClass('activado');
    $noselected2.removeClass('activado');
}

function buttonremove($btn1, $btn2) {
    $btn1.removeClass('activado');
    $btn2.removeClass('activado');
}

$button1.click(function () {
    if (!$(this).hasClass('activado')) {
        $(this).addClass('activado');
        buttonremove($button2, $button3);
        //slide1
        selected($slide1, $slide2, $slide3);
        //image1
        selected($image1, $image2, $image3);
    }
});

$button2.click(function () {
    if (!$(this).hasClass('activado')) {
        $(this).addClass('activado');
        buttonremove($button1, $button3);
        //slide2
        selected($slide2, $slide1, $slide3);

        //image2
        selected($image2, $image1, $image3);
    }
});

$button3.click(function () {
    if (!$(this).hasClass('activado')) {
        $(this).addClass('activado');
        buttonremove($button1, $button2);
        //slide3
        selected($slide3, $slide1, $slide2);

        //image3
        selected($image3, $image1, $image2);
    }
});

//contac form validation

$(document).ready(function () {
    $('#emai').keyup(function () {
        //check email format
        if (validateEmail()) {
            $(".wrapper img").css("opacity", "0");
            $(".wrapper").removeClass('full');
            // and set label 
            $(".message").css("opacity", "0");

        } else {
            $(".wrapper img").css("opacity", "1");
            $(".wrapper").addClass('full');

            // and set label 
            $(".message").css("opacity", "1");
        }
    });

    function validateEmail() {
        var email = $('#emai').val();
        //use regular expression 
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

        if (reg.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    $('.btnContact').click(function () {
        if (!validateEmail()) {
            return false;
        } else {
            alert("correo enviado");
            return false;
        }
    })
})