$(document).ready(
    function () {
        $('.menu-toggle').click(function () {
            $('nav').toggleClass('active')
        })

        $('ul li').hover(function () {
            $(this).toggleClass('active');
        })
    }
)

// var btn = $('#aboutus-scroll');
// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({scrollTop:$('#aboutus-block').position().top}, 'slow');

// });
const btn = document.querySelector('#aboutus-scroll');
const html = document.querySelector('html,body');
const ab = document.querySelector('#aboutus-block');
btn.addEventListener("click", e => {
    e.preventDefault();
    html.animate({
        scrollTop: ab.position().top
    }, 'slow');
    return false;
})

var btn = $('#contact-scroll');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#contact-blog').position().top }, 'slow');

});

var btn = $('#home-scroll');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});
var btn = $('#down-scroll');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#container-blog').position().top }, 'slow');
});



//Slider
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function () {
        nextSlide();
    });

    $('#prev-btn').click(function () {
        prevSlide();
    });

    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}