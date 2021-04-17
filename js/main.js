/** MODAL 
 * ----------------------------------------------------
 */

$(window).on('load', function() {
    setTimeout(function() {
        $("#myModal").modal('show')
    }, 1000);

    $('.close').click(function() {
        $("#myModal").modal('hide')
    });

});

$(document).ready(function() {



    /***testimonials ****/

    $('.testimonial-pics img').click(function() {
        $(".testimonial-pics img").removeClass("active");
        $(this).addClass("active");

        $(".testimonial").removeClass("active");
        $("#" + $(this).attr("alt")).addClass("active");
    });

    /***** MENU *****/
    let = menuBtn = document.getElementById('menuBtn');
    let = sideNav = document.getElementById('sideNav');
    let = menu = document.getElementById('menu');
    sideNav.style.left == "-220px";

    menuBtn.onclick = function() {
        if (sideNav.style.left == "-220px") {
            sideNav.style.left = "0";
            menu.src = "../images/close.png";
        } else {
            sideNav.style.left = "-220px";
            menu.src = "../images/menu.png";
        }
    }


});