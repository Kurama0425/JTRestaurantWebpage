/**
* Template Name: Restaurantly - v1.2.1
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, reducedMotion ? 0 : 500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        closeMobileNav(false);
        target.attr('tabindex', '-1')[0].focus({preventScroll: true});
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, reducedMotion ? 0 : 500, 'easeInOutExpo');
      }
    }
  });

  // Mobile navigation: named controls, keyboard containment, and restored focus.
  function closeMobileNav(restoreFocus) {
    $('body').removeClass('mobile-nav-active');
    $('.mobile-nav-overly').hide();
    $('.mobile-nav-toggle').attr('aria-expanded', 'false');
    $('body > [data-nav-inert]').each(function() { this.inert = false; this.removeAttribute('data-nav-inert'); });
    if (restoreFocus) $('.mobile-nav-toggle').trigger('focus');
  }
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({class: 'mobile-nav d-lg-none', id: 'mobile-navigation'}).attr('aria-label', 'Mobile navigation');
    $('body').append($mobile_nav);
    $mobile_nav.prepend('<button type="button" class="mobile-nav-close" aria-label="Close navigation"><i class="icofont-close" aria-hidden="true"></i></button>');
    $('#header').append('<button type="button" class="mobile-nav-toggle d-lg-none" aria-label="Open navigation" aria-controls="mobile-navigation" aria-expanded="false"><i class="icofont-navigation-menu" aria-hidden="true"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
    $('.mobile-nav-toggle').on('click', function() {
      $('body').addClass('mobile-nav-active');
      $('.mobile-nav-overly').show();
      $(this).attr('aria-expanded', 'true');
      $('body > :not(.mobile-nav):not(.mobile-nav-overly):not(script):not(style)').each(function() {
        if (!this.inert) { this.inert = true; this.setAttribute('data-nav-inert', ''); }
      });
      window.setTimeout(function() {
        if ($('body').hasClass('mobile-nav-active')) $mobile_nav.find('.mobile-nav-close')[0].focus();
      }, 50);
    });
    $('.mobile-nav-close, .mobile-nav-overly').on('click', function() { closeMobileNav(true); });
    $mobile_nav.on('keydown', function(e) {
      if (e.key === 'Escape') { e.preventDefault(); closeMobileNav(true); }
      if (e.key === 'Tab') {
        var links = $mobile_nav.find('button, a[href]').filter(':visible');
        var first = links[0], last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    $(window).on('resize', function() { if (window.innerWidth >= 992) closeMobileNav(false); });
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, reducedMotion ? 0 : 500, 'easeInOutExpo');
    return false;
  });

  // Events carousel (uses the Owl Carousel library)
  $(".events-carousel").owlCarousel({
    autoplay: false,
    dots: true,
    loop: false,
    items: 1
  });

  $('.events-carousel .owl-dot').each(function(index) {
    $(this).attr('aria-label', index === 0 ? 'Show private dining room' : 'Show restaurant bar');
  });
  function syncSlides() {
    $('.events-carousel .owl-item').each(function() {
      $(this).attr('aria-hidden', String(!$(this).hasClass('active')));
    });
    $('.events-carousel .owl-dot').each(function() {
      $(this).attr('aria-current', $(this).hasClass('active') ? 'true' : 'false');
    });
  }
  $('.events-carousel').on('translated.owl.carousel', syncSlides);
  syncSlides();

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
      disable: reducedMotion
    });
    document.documentElement.classList.add('aos-ready');
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);
