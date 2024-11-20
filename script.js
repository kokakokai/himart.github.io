$('.btn_search').click(function(){
    $("#search_bg").addClass('on');
    $('.search').addClass('on');
});
$('#search_bg').click(function(){
    $(this).removeClass('on');
    $('.search').removeClass('on');
});

$(".btn_menu").click(function(){
    $("nav").animate({right: "0%"});
});

// $("nav").click(function(){
//     $("nav").animate({right: "-100%"})
// })

$(document).ready(function(){
    $('.btn-close').click(function(){
        $('nav').animate({right: "-100%"})
    })
})


$(document).ready(function(){
    $('.navi>li>a').click(function(e){
        e.preventDefault();

        var $sub = $(this).next('.sub');

        if ($sub.is(':visible')) {
            $sub.slideUp();
        } else {
            $('.sub').slideUp();
            $sub.slideDown();
        }
    });
});

$(document).ready(function(){
    $('.sub>li>a').click(function(e){
        e.preventDefault();

        var $submenu = $(this).next('.submenu');

        if ($submenu.is(':visible')) {
            $submenu.slideUp();
        } else {
            $('.submenu').slideUp();
            $submenu.slideDown();
        }
    });
});

// $(document).ready(function(){
//     $('.navi>li').click(function(e){
//         e.preventDefault();

//         var $sub = $(this).next('.sub');
//         $('.sub').not($sub).slideUp();
//         $sub.slideToggle();
//     });
// });


$(document).ready(function(){

    $('#slide0').show();
    $('.menu-btn').eq(0).addClass('on');

    $('.menu-btn').on('click', function(){
        var index = $(this).data('index');

        $('.mySwiper_s3').hide();
        $('#slide' + index).show();

        $('.menu-btn').removeClass('on');
        $(this).addClass('on')
    })
})

var swiper = new Swiper(".mySwiper", {
pagination: {
    el: ".swiper-pagination",
    type: "fraction"
    },
autoplay: true,
loop: true,
cssMode: true,
    });

var swiper = new Swiper(".mySwiper_s1", {
slidesPerView: 2.2,
spaceBetween: 12,

pagination: {
el: ".swiper-pagination",
clickable: true,
},
breakpoints: {
540: {
    slidesPerView: 3.2,
    spaceBetween: 12,
},
768: {
    slidesPerView: 3.2,
    spaceBetween: 12,
},
1000: {
    slidesPerView: 4.2,
    spaceBetween: 16,
},

1300: {
    slidesPerView: 5.2,
    spaceBetween: 20,

    navigation: {
        prevEl: ".left",
        nextEl: ".right",
    },
},
},
});

var swiper = new Swiper(".mySwiper_s2", {
cssMode: true,
slidesPerView: 2.2,
spaceBetween: 12,

pagination: {
el: ".swiper-pagination",
},
breakpoints: {
768: {
    slidesPerView: 3.2,
    spaceBetween: 16,
},

1300: {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
        prevEl: ".left",
        nextEl: ".right",
    },
}


}
});

var swiper = new Swiper(".mySwiper_s3", {
cssMode: true,
slidesPerView: 2.2,
spaceBetween: 12,

pagination: {
el: ".swiper-pagination",
},
breakpoints: {
768: {
    slidesPerView: 3.2,
    spaceBetween: 16,
},

1300: {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
        prevEl: ".left",
        nextEl: ".right",
    },
}
}
});

var swiper = new Swiper(".mySwiper_s5", {
cssMode: true,
slidesPerView: 1.5,
spaceBetween: 12,

pagination: {
el: ".swiper-pagination",
},
breakpoints: {
768: {
    slidesPerView: 2.5,
    spaceBetween: 16,
},

1300: {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        prevEl: ".left",
        nextEl: ".right",
    },
}
}
});