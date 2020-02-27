
$(document).ready(function () {
    $('.button[filter="wd"]').click(function () {
        if ($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused')
            $(this).addClass('focused');
            $('div[filter]').hide();
            $('div[filter="wd"]').show(300);
        }
    })

    $('.button[filter="ud"]').click(function () {
        if ($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused')
            $(this).addClass('focused');
            $('div[filter]').hide();
            $('div[filter="ud"]').show(300);
        }
    })

    $('.button[filter="moc"]').click(function () {
        if ($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused')
            $(this).addClass('focused');
            $('div[filter]').hide();
            $('div[filter="moc"]').show(300);
        }
    })

    $('.button[filter="all"]').click(function () {
        if ($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused')
            $(this).addClass('focused');
            $('div[filter]').show(300);
        }
    })

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
    });

})


