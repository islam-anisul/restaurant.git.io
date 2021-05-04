$(window).scroll(function () {
        var anis = $(this).scrollTop();
        if (anis > 200) {
            $('.navbar').addClass('header_bg');
        } else {
            $('.navbar').removeClass('header_bg');
        }
    });

$(window).scroll(function () {
        var backtop = $(this).scrollTop();
        if (backtop > 500) {
            $('#back_top_button').show();
        } else {
            $('#back_top_button').hide();
        }
    });
    $('#back_top_button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });













