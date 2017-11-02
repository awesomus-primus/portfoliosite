$(document).ready(function () {

    $(".flip").flip({
        trigger: 'hover',
    });

    $(".vertical").flip({
        trigger: 'hover',
        axis: 'x'
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
    var navbarToggleIcon = document.getElementById("navbar-toggle-img");
    var navbarToggleClose = document.getElementById("navbar-toggle-x");

    navbarToggle.addEventListener("click", toggleMenu);
    
    function toggleMenu() {
        if (navbarMenu.style.display === "none") {
            navbarMenu.style.display = "inline";
            navbarToggleIcon.style.display = "none";
            navbarToggleClose.style.display = "block";
        } else {
            navbarMenu.style.display = "none";
            navbarToggleIcon.style.display = "block";
            navbarToggleClose.style.display = "none";
        }
        
    }

});

