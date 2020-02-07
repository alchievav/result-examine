$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ''],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        },
        center: true
    });
    $("#back-to-top").on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    $(window).on('scroll', function() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            $("#back-to-top").addClass("active");
        } else {
            $("#back-to-top").removeClass("active");

        }
    });
});