$(document).ready(function () {

    $(".flip").flip({
        trigger: 'hover'
    });

    $('#intro').animate({
        left: '80%',
    }, "slow");

    $(window).scroll(function () {
        var hT = $('#contact').offset().top,
            hH = $('#contact').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $('#contact').hide();
            $('#contact').animate({
                right: '80%',
            }, "slow");
            $('#contact').show();
        }
    });

    $(window).scroll(function () {
        var hT = $('#portfolio').offset().top,
            hH = $('#portfolio').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $('#portfolio').animate({
                left: '80%',
            }, "slow");
        }
    });

    $(window).scroll(function () {
        var hT = $('#areas').offset().top,
            hH = $('#areas').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $('#areas').animate({
                right: '80%',
            }, "slow");
        }
    });

    var navbarToggle = document.getElementById("navbar-toggle-wrapper");
    var navbarMenu = document.getElementById("nav-menu");

    function toggleNavMenu(){
        navbarToggle.classList.toggle("active");

        toggleNav();
    }

    function toggleNav(){
        navbarMenu.classList.toggle("active");
    }

    document.addEventListener("DOMContentLoaded", function(){
        navbarToggle.addEventListener("click", function() {toggleNavMenu();});
    });

});