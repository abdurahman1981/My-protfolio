// Fix Nav by jQuery
$(document).ready(function(){
    $(window).scroll(function(){
        //sticky Navbar on scroll
        if(this.scrollY>20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
        //scroll-up button/hide script
        if(this.scrollY>500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show")
        }
    });


//scroll to up by jQuery

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    //removing smooth scroll on button click
    $('html').css("scrollBehavior","auto");
});

//applying again smooth scroll on menu items
$('.navbar .menu li a').click(function(){
    $('html').css('scrollBehavior','smooth')
})

// toggle menu/navbar script

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.navbar-btn i').toggleClass('active');
});

//typing text animation script

var typed = new  Typed(".typing",{
    strings: ["Designer", 
    "Front-end developer",
    "Tester",
    "UI/UX designer",
    "Free lancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
)

var typed = new  Typed(".typing-2",{
    strings: ["Designer", 
    "Front-end developer",
    "Tester",
    "UI/UX designer",
    "Free lancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    }
)

// owl carousel script

$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoPlayTimeOut: 2000,
    autoPlayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },

        600:{
            items: 2,
            nav: false
        },

        1000:{
            items: 3,
            nav: false
        }
    }
});
});
