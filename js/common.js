/*
 * ---------------------------------------------------
 * 1. Slide Carousel
 * 2. Scroll to Top
 * 3. Sticky Menu
 * 4. Accordion has icon
 * 5. Hover tag a show ul page Product
 * 6. POPUP order a product - check on info Payment
 * 7. Scroll News Item Tablet & Mobile
 */

  (function($){
    "use strict";
  /* ==================================================== */

  /*
   * 1. Slide Carousel
  */
  $(document).ready(function() {
    $('.owl-carousel').each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
      config.smartSpeed="800";
      
      if($(this).hasClass('owl-style2')){
        config.animateOut='fadeOut';
        config.animateIn='fadeIn';    
      }
      if($(this).hasClass('dotsData')){
        config.dotsData="true";
      }
      $(this).owlCarousel(config);
    });
  });

  /*
   * 2. Scroll to Top
  */
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /*
   * 3. Sticky Menu
  */
  // $('.sh-sticky-header').sticky({});

  /*
   * 7. Main Menu
  */
  $(".nav-toogle").on( 'click', function() {
    $(this).toggleClass('has-open');
    $(".menu").toggleClass("has-open");
    $("body").toggleClass("menu-open");
  });

  /*
   * 7. Main Menu
  */
  $(document).ready(function(){
    $('.menu ul li.parent').append('<span class="plus"></span>');
    $('.menu ul li.parent .plus').click(function(){
      $(this).toggleClass('open').siblings('.submenu').slideToggle();
    });
  });

  /* Footer Parallax */
  function jevelin_footer_parallax() {
    if ($(document).width() > 850) {
      $("#wrapper > .content-container").css( 'margin-bottom', $('.sh-footer').height() );
    } else {
      $("#wrapper > .content-container").css( 'margin-bottom', '' );
    }
  }

  function jevelin_footer_parallax_visible() {
    if ($(document).width() > 850) {
      if( ( $(document).height() - ($(window).scrollTop() + $(window).height()) ) < $('.sh-footer').height() ) {
        $('.sh-footer').css( 'opacity', '1');
      } else {
        $('.sh-footer').css( 'opacity', '0');
      }
    }
  }

  $("body").addClass( 'sh-footer-paralalx-init' );
  $(window).load(function (){
    jevelin_footer_parallax();
    jevelin_footer_parallax_visible();
  });
  $(window).resize(function() {
      clearTimeout(window.resizedFinishedFooter);
      window.resizedFinishedFooter = setTimeout(function(){
        jevelin_footer_parallax();
      }, 500);
  });
  $(window).scroll(jevelin_footer_parallax_visible);

  /* Share */
  $('.social-share-button').on( 'click', function() {
    $(this).next().toggleClass('sh-social-share-networks-active');
  });

  /* Share  */
  $(".social-share-networks").jsSocials({
    _getShareUrl: function() {
        var url = jsSocials.Socials.prototype._getShareUrl.apply(this, arguments);
        return "javascript:window.open('" + url + "', '', 'menubar=no, width=500, height=300')";
    },
    showLabel: false,
    showCount: "inside",
    shares: ["facebook", "twitter", "googleplus", "email", "pinterest"]
  });

})(jQuery); // End of use strict