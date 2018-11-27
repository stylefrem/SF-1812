/*-----------------------------------------------------------------------------------*/
/*      * global $, jQuery, alert
/*-----------------------------------------------------------------------------------*/

(function ($) {

    'use strict';
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*-----------------------------------------------------------------------------------*/
    
    var win = $(window);
    
    win.on('load',function() {
        
        $('#loader').delay(1500).fadeOut(function(){
            
            $('#loader').remove();
                
                window.sr = ScrollReveal({ reset: true });
                sr.reveal('.anim');
                $('.slideshow h2, .slideshow p, .slideshow .btn').fadeIn();
                $('.slideshow h2, .slideshow p, .slideshow .btn').attr('id', 'op');
                new WOW().init();

        });
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Header && Navigation Menu
    /*-----------------------------------------------------------------------------------*/
    
    $('.header .open-navigation i.icon.fas.fa-ellipsis-h').on('click', function() {

        $('.nav-menu').fadeToggle('show');

    });
    
    $('.nav-menu .not-fade').on('click', function() {

        $('.nav-menu').fadeOut('show');

    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start SlideShow
    /*-----------------------------------------------------------------------------------*/

    $('.slideshow .owl-carousel').owlCarousel({
        
        mouseDrag: false,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        margin: 0,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        
    });

    /*-----------------------------------------------------------------------------------*/
    /*  * Start FDS 
    /*-----------------------------------------------------------------------------------*/
    
    $('.fds-post-items').on('mouseleave', function() {
        
        $(this).find('.meta-post-container').attr('id', 'back-mg');
        
    });
    
    $('.fds-post-items').mouseenter('mouseenter', function() {
        
        $(this).find('.meta-post-container').removeAttr('id');
        
    });
    
    
    $('.trending .col-trending .trending-post-items').on('mouseleave', function() {
        
        $(this).find('.meta-post-container').attr('id', 'back-mg');
        
    });
    
    $('.trending .col-trending .trending-post-items').on('mouseenter', function() {
        
        $(this).find('.meta-post-container').removeAttr('id');
        
    });

    /*-----------------------------------------------------------------------------------*/
    /*  * Start Latest Articles
    /*-----------------------------------------------------------------------------------*/
    
    $('.latest-posts .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

})(jQuery);

/*-----------------------------------------------------------------------------------*/
/*      * End
/*-----------------------------------------------------------------------------------*/





