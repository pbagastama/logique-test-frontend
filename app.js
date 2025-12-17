$(document).ready(function () {
  // Mobile Menu Toggle
  $('.menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
  });

  // Close mobile menu when clicking on a link
  $('.nav a').click(function () {
    if ($(window).width() <= 768) {
      $('.nav').removeClass('active');
      $('.menu-toggle').removeClass('active');
    }
  });

  // Tabs functionality with smooth transition
  $('.tab').click(function () {
    const tabId = $(this).data('tab');

    // Remove active class from all tabs
    $('.tab').removeClass('active');
    $(this).addClass('active');

    // Hide all tab contents with fade out
    $('.tab-content').fadeOut(200, function () {
      // Show selected tab content with fade in
      $('#' + tabId).fadeIn(300);
    });
  });

  // Video Modal
  $('.open-video').click(function (e) {
    e.preventDefault();
    $('.modal').fadeIn(300);
    $('body').css('overflow', 'hidden');
  });

  // Close modal
  $('.close-modal, .modal').click(function (e) {
    if (e.target === this || $(e.target).hasClass('close-modal')) {
      $('.modal').fadeOut(300);
      $('body').css('overflow', 'auto');
    }
  });

  // Close modal on ESC key
  $(document).keydown(function (e) {
    if (e.key === 'Escape' && $('.modal').is(':visible')) {
      $('.modal').fadeOut(300);
      $('body').css('overflow', 'auto');
    }
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').click(function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 80,
        },
        600
      );
    }
  });

  // Newsletter form submission
  $('.newsletter-form').submit(function (e) {
    e.preventDefault();
    const email = $('.newsletter-input').val();
    if (email) {
      // Simple validation
      if (email.includes('@')) {
        alert('Thank you for subscribing!');
        $('.newsletter-input').val('');
      } else {
        alert('Please enter a valid email address.');
      }
    }
  });

  // Subscribe button click
  $('.newsletter-btn').click(function () {
    $('.newsletter-form').submit();
  });

  // Animate elements on scroll (optional enhancement)
  const animateOnScroll = function () {
    $('.masonry-item, .service-item').each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('animate-in');
      }
    });
  };

  // Run on scroll
  $(window).scroll(function () {
    animateOnScroll();
  });

  // Run on load
  animateOnScroll();

  // Testimonial avatar click (optional enhancement)
  $('.author-avatars .avatar').click(function () {
    $('.author-avatars .avatar').removeClass('active');
    $(this).addClass('active');
  });
});
