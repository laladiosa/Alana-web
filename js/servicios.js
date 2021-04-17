$(document).ready(function() {

    // panel
    $('.accordion .show').click(function() {

        $('.accordion  .wrapper').slideUp(1000);
        if ($(this).next().is(':hidden') == true) {
            $(this).next().slideDown(1000);
        }
        $('.show').toggleClass('selected');
    });

    $('.accordion  .wrapper').hide();
})